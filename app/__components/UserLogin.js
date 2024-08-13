import axios from 'axios';
import React, { useState } from 'react';
import UserRegister from './UserRegistration';

export default function UserLogin() {
    const [option, setOption] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const body = { email, password };
        console.log(body);
    }


    return (
        <div className="flex flex-col items-center justify-center gap-3 w-full min-h-[100vh]">
            <form onSubmit={handleLogin} className="text-violet-700 font-semibold bg-blue-50 shadow-[0_0_4px_black] w-[98%] max-w-[540px] rounded-2xl px-1 sm:px-2 py-6 flex flex-col items-center justify-center" autoComplete='on'>
                <h2 className="font-extrabold text-4xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 w-fit pb-2 leading-12 drop-shadow-[0_0_1px_black]">Login Page</h2>
                
                <div className="flex flex-col w-[96%]">
                    <label htmlFor="email" className="text-violet-700 text-xs relative after:absolute after:top-[-5px] after:content-['*'] after:text-red-700 after:text-lg">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full max-w-[550px] bg-violet-800/15 focus:shadow-[0_0_15px_brown_inset] px-2 py-[10px] rounded text-center outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 placeholder:text-gray-500' placeholder='enter your email-id' name='email' required />
                </div>
                <div className="flex flex-col w-[96%]">
                    <label htmlFor="password" className="text-violet-700 text-xs relative after:absolute after:top-[-5px] after:content-['*'] after:text-red-700 after:text-lg">password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full max-w-[550px] bg-violet-800/15 focus:shadow-[0_0_15px_brown_inset] px-2 py-[10px] rounded text-center outline-none focus:bg-green-600/15 ring-1 focus:ring-2 ring-violet-700 placeholder:text-gray-500' placeholder='enter your password' name='password' required /></div>

                <button type='submit' className='w-[96%] max-w-[550px] text-center rounded-md bg-red-900/95 py-2 mt-[14px] hover:bg-red-700 font-mono text-white ring-1 focus:ring-2 ring-red-700' >Login</button>
            </form>
            {
                option == 1 && <UserRegister setOption={setOption} />
            }
        </div>
    )
}