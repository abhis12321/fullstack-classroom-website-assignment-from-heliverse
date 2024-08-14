import axios from 'axios';
import React, { useState } from 'react';

export default function UserRegistration({ setOption, userRole }) {
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState("male");
    const [password, setPassword] = useState('');
    const [userAddress, setAddress] = useState('');

    const handleUserRegistration = e => {
        e.preventDefault();
        const body = { name, phoneNo, email, gender, userRole, password, userAddress };
        axios.post('/api/user', body)
            .then(result => result.data)
            .then(data => alert(data.message) | (data.success & setOption(0)))
            .catch(error => alert(error.message));
    }


    return (
        <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90" >
            <form className='text-gray-950 bg-blue-50 shadow-[0_0_4px_black] w-[98%] max-w-[600px] rounded-2xl px-1 sm:px-2 py-2 sm:py-4 gap-1 flex flex-col items-center justify-center' onSubmit={handleUserRegistration}>
                <div className={`w-full flex items-center justify-around pb-2 drop-shadow-[0_0_2px_black]`}>
                    <h1 className="py-4 flex rounded-lg text-3xl lg:text-4xl font-bold sm:font-extrabold text-center w-fit text-red-900 drop-shadow-[0_0_1px_white]">New Resistration</h1>
                </div>
                <div className="flex flex-row sm:flex-row gap-2 items-center justify-evenly w-[98%] max-w-[600px]">
                    <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className='outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder="enter user's name" required />
                    <select name="status" value={gender} onChange={(e) => setGender(e.target.value)} className='w-[120px] outline-none invalid:text-pink-600 font-semibold bg-blue-800/15 hover:bg-indigo-800/25 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_10px_brown_inset] py-[6px] px-3 rounded-md text-center ring-cyan-600 ring-2' >
                        <option value="male" className=''>male</option>
                        <option value="female" className=''>female</option>
                        <option value="others" className=''>others</option>
                    </select>
                </div>
                <input name='mobileNo' type="Number" value={phoneNo} onChange={e => setPhoneNo((e.target.value).length <= 10 ? e.target.value : (e.target.value).substring(0, 10))} className='outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder="user's phone number" required />

                <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className='outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center ' placeholder="enter user's email-id" required />

                <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className='outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center ' placeholder='create a password' required />

                <textarea name='mobileNo' type="text" rows={4} value={userAddress} onChange={e => setAddress(e.target.value)} className='outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center ' placeholder="enter user's address" required ></textarea>

                <div className="flex w-[98%] items-center justify-between gap[2px] border-[2px] border-cyan-500 rounded-lg overflow-hidden">
                    <div className="w-[50%] text-white/80 bg-orange-900 hover:bg-orange-700 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer border-r-[2px] border-cyan-500" onClick={e => setOption(0)}>cancel</div>
                    <input type="submit" value={'Register'} className='w-[50%] text-white/80 bg-red-800 hover:bg-red-600 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer' required />
                </div>
            </form>
        </div>
    )
}