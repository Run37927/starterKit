'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
import { Icons } from './ui/Icons';
import { useToast } from './ui/use-toast';
import { Loader2 } from 'lucide-react';

function UserAuthForm() {
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const { toast } = useToast();

    const signInWithGoogle = async () => {
        setIsGoogleLoading(true);

        try {
            await signIn('google');
        } catch (error) {
            console.log("signing in with google error: ", error)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem logging in with Google.",
            });
        } finally {
            setIsGoogleLoading(false);
        }
    }

    return (
        <div className='space-y-5'>
            <div
                onClick={signInWithGoogle}
                className='flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md px-4 py-4 hover:shadow-lg transition-shadow duration-150 ease-in-out cursor-pointer'
            >
                {isGoogleLoading ? <Loader2 className='h-5 w-5 animate-spin' /> : <Icons.googleLogo />}
                <p className='text-gray-500 ml-2 text-xl font-semibold'>Continue with Google</p>
            </div>
        </div>
    )
}

export default UserAuthForm