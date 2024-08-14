import React from 'react';
import { useAuth } from './AuthProvider';
import UserRegistration from './UserRegistration';
import ClassRooms from './ClassRooms';
import ClassRoomForm from './ClassRoomForm';

export default function UserProfile({ option, setOption }) {
    const USER = useAuth();
    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-no-repeat bg-center bg-contain " style={{ minHeight: "calc(100vh - 4rem)" }}>
            <div className='w-[98%] max-w-[700px] min-h-[50vh] font-bold text-red-950 bg-blue-50 shadow-[0_0_15px_gray_inset] flex flex-col gap-3 items-center justify-evenly px-1 py-4 rounded-2xl'>
                <h1 className='text-yellow-400 drop-shadow-[0_0_3px_white]'>You are Welcome, At Your Profile</h1>
                <p className=""><span className="text-gray-500">Name : </span>{USER.user?.name} <span className="text-gray-500">({USER.user?.userRole})</span></p>
                <p className=""><span className="text-gray-500">Email : </span>{USER.user?.email}</p>
                <p className=""><span className="text-gray-500">MobileNo : </span>{USER.user?.phoneNo}</p>
                <div className="flex gap-4 flex-wrap">
                    {
                        USER.user.userRole != "student" &&
                        <>
                            <button className={`${USER.user?.userRole !== "principal" && "hidden"} py-[5px] px-6 rounded-lg text-white bg-blue-900 hover:bg-blue-600  text-sm font-semibold`} onClick={() => setOption(5)}>All classes</button>
                            <button className={`${USER.user?.userRole !== "principal" && "hidden"} py-[5px] px-6 rounded-lg text-white bg-blue-900 hover:bg-blue-600  text-sm font-semibold`} onClick={() => setOption(1)}>add new teacher</button>
                            <button className={`py-[5px] px-6 rounded-lg text-white bg-blue-900 hover:bg-blue-600  text-sm font-semibold`} onClick={() => setOption(1)}>add new student</button>
                        </>
                    }
                    <button className='py-[6px] px-6 text-white bg-red-800 hover:bg-red-600 rounded-lg text-sm font-semibold' onClick={USER.logout}>Logout</button>

                </div>
            </div>

            {
                option === 1 ? <UserRegistration setOption={setOption} userRole={option === 1 ? "teacher" : "student"} />
                    :
                    option === 5 ? <ClassRooms setOption={setOption} />
                        :
                        (option === 6 && <ClassRoomForm setOption={setOption} />)
            }
        </div>
    )
}