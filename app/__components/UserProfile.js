import React from 'react';
import Link from 'next/link';
import { useAuth } from './AuthProvider';

export default function UserProfile() {
    const USER = useAuth();
    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-no-repeat bg-center bg-contain " style={{ minHeight: "calc(100vh - 4rem)" }}>
            <div className='text-red-950 bg-blue-50 shadow-[0_0_15px_gray_inset] w-[98%] max-w-[700px] min-h-[50vh] flex flex-col gap-3 items-center justify-evenly px-1 py-4 rounded-2xl'>
                <h1 className='text-yellow-400 drop-shadow-[0_0_3px_white]'>You are Welcome, At Your Profile</h1>
                <p className=""><span className="text-gray-400">Name : </span>{USER.user?.name} <span className="text-gray-400">({USER.user?.userRole})</span></p>
                <p className=""><span className="text-gray-400">Email : </span>{USER.user?.email}</p>
                <p className=""><span className="text-gray-400">MobileNo : </span>{USER.user?.phoneNo}</p>
                <button className='py-[6px] px-6 text-white bg-red-800 hover:bg-red-600 rounded-lg text-sm font-semibold' onClick={USER.logout}>Logout</button>
                {
                    USER.user.userRole != "student" &&
                    <>
                        <Link href={'/'} className={`${USER.user?.userRole !== "principal" && "hidden"} py-[5px] px-6 rounded-lg bg-blue-700/50 hover:bg-blue-700/30 ring-2 ring-blue-700/50 text-sm font-semibold`} >add new teacher</Link>
                        <Link href={'/'} className={`py-[5px] px-6 rounded-lg bg-blue-700/50 hover:bg-blue-700/30 ring-2 ring-blue-700/50 text-sm font-semibold`} >add new student</Link>
                    </>
                }
            </div>
        </div>
    )
}