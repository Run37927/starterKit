'use client'
import { LayoutDashboard, LineChart, LogOutIcon, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { signOut } from 'next-auth/react';

function UserAccountNav({ session }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    function toggleDropDownMenu() {
        setShowDropdown(!showDropdown);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function showDropDownMenu() {
        return (
            <div
                ref={dropdownRef}
                className='min-w-[180px] bg-white shadow-xl border border-brand absolute top-8 right-0 z-50 rounded-xl pt-2'
            >
                <div className='flex flex-col'>
                    <div className='flex items-center border-b-[1px] px-4 pb-2'>
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-semibold'>{session.user.name}</p>
                            <p className='text-xs text-ellipsis overflow-hidden'>{session.user.email}</p>
                            {session.user.role === 'admin' ? (
                                <p className='text-xs font-semibold rounded-md py-1 mt-1 text-green-800 bg-green-500 bg-opacity-20 max-w-12 text-center'>Admin</p>
                            ) : null}
                        </div>
                    </div>

                    <div className='cursor-pointer'>
                        <div className='hover:bg-gray-100 rounded-md px-4 py-2'>
                            <Link href='/profile' className='flex items-center'>
                                <User className='h-4 w-4 mr-2' />
                                <p className='text-sm'>Profile</p>
                            </Link>
                        </div>

                        <div className='hover:bg-gray-100 rounded-md px-4 py-2'>
                            <Link href='/dashboard' className='flex items-center '>
                                <LayoutDashboard className='h-4 w-4 mr-2' />
                                <p className='text-sm'>Dashboard</p>
                            </Link>
                        </div>

                        {session.user.role === 'admin' ? (
                            <div className='hover:bg-gray-100 rounded-md px-4 py-2'>
                                <div className='flex items-center'>
                                    <LineChart className='h-4 w-4 mr-2' />
                                    <p className='text-sm'>Analytics</p>
                                </div>
                            </div>) : null}

                        <div className='hover:bg-gray-100 rounded-md px-4 py-2' onClick={() => signOut()}>
                            <div className='flex items-center'>
                                <LogOutIcon className='h-4 w-4 mr-2' />
                                <p className='text-sm'>Sign out</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

    return (
        <div
            className='relative'
            onClick={toggleDropDownMenu}
        >
            <div className="w-7 h-7 cursor-pointer rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 mr-2"></div>
            {/* <Image
                width={28}
                height={28}
                className='w-full rounded-full hover:opacity-85 cursor-pointer'
                src={session?.user?.image}
                alt='profile pic'
                referrerPolicy='no-referrer'
            /> */}
            {showDropdown && showDropDownMenu()}
        </div>
    )
}

export default UserAccountNav