'use client'
import React from 'react'
import { CircleXIcon } from 'lucide-react'
import { useRouter } from 'next/navigation';

function CloseModalButton() {
    const router = useRouter();

    return (
        <div onClick={() => router.back()}>
            <CircleXIcon className='w-6 h-6 cursor-pointer hover:opacity-50' />
        </div>
    )
}

export default CloseModalButton