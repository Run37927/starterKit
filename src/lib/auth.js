import GoogleProvider from "next-auth/providers/google"
import prisma from "./db"
import { getServerSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_APIKEY);
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
        async signIn({ account, profile }) {
            // console.log(profile)
            if (!profile.email) {
                throw new Error('No profile')
            }

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


            // Ensure we have a user object before proceeding
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
            } else {
                throw new Error('User could not be created or found');
            }

            return true;
        },
        redirect() {
            return '/'
        }
    }
}

export async function getAuthSession() {
    const session = await getServerSession(authOptions);
    if (session?.user?.email) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            });

            if (user) {
                session.user.id = user.id;
                session.user.role = user.role;
            }

        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    }
    return session;
}