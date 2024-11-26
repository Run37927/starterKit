import GoogleProvider from "next-auth/providers/google"
import prisma from "./db"
import { getServerSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

async function upsertUserAndAccount(account, profile) {
    const user = await prisma.user.upsert({
        where: {
            email: profile.email
        },
        create: {
            email: profile.email,
            name: profile.name,
            image: profile.picture,
            role: "user",
        },
        update: {
            name: profile.name
        },
    })

    console.log("user", user)

    const isNewUser = user.createdAt.getTime() + 1500 > Date.now();
    console.log("is new user?", isNewUser);

    //TODO: update subject accordingly
    if (isNewUser) {
        const messageToSelf = {
            to: 'hairunhuang@gmail.com',
            from: 'hello@runbuilds.xyz',
            subject: 'A new user has signed in on .',
            html: `A user has signed in.<br><strong>Name</strong>: ${user.name}<br><strong>Email</strong>: ${user.email}`,
        };

        try {
            await sgMail.send(messageToSelf);
            console.log('New signup notification sent.');
        } catch (error) {
            console.error('Error sending signup notification:', error);
        }
    }

    if (user) {
        await prisma.account.upsert({
            where: {
                provider_providerAccountId: {
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                },
            },
            create: {
                userId: user.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                // Add other fields from the account object as necessary
            },
            update: {
                // Update any fields that might change
            },
        });
    }
}

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // This runs when the user first signs in
                token.id = user.id
                token.role = user.role
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
        async signIn({ account, profile }) {
            if (!profile.email) {
                throw new Error('No profile')
            }

            try {
                await upsertUserAndAccount(account, profile);
            } catch (error) {
                console.error('Error upserting user and account:', error);
                return false;
            }

            return true;
        },
        redirect({ url, baseUrl }) {
            console.log("redirect callback triggered:", {
                url,
                baseUrl
            })
            return "/";
        }
    }
}

export async function getAuthSession() {
    return await getServerSession(authOptions);
}