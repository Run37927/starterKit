import React from 'react'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import CloseModalButton from './ui/CloseModalButton'

function SignIn() {
    return (
        <div className='fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-50'>
            <div className='container flex items-center h-full max-w-lg mx-auto'>
                <div className='relative bg-white w-full h-fit rounded-2xl py-20 px-2'>
                    <div className='absolute top-6 right-6'>
                        <CloseModalButton />
                    </div>
                    <div className='flex flex-col items-center justify-center px-3 md:px-10 relative'>
                        <h1 className='text-center text-3xl font-bold py-8'>Sign in to myproduct</h1>

                        <div className='flex items-center justify-center mb-20'>
                            <p className='text-center text-xs max-w-[300px]'>
                                By continuing, you are setting up an account if you don&apos;t have one already and agree to our <Link href='/user-agreement' className='underline cursor-pointer' target="_blank" rel="noopener noreferrer">User Agreement</Link>
                            </p>
                        </div>

                        <UserAuthForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn