import axios from 'axios';
import React, { useState } from 'react';

export default function UserRegister({setOption}) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState("male");
  const [userRole, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [userAddress, setAddress] = useState('');

  const handleUserRegistration = e => {
    e.preventDefault();
  }


  return (
    <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90" >
      <form className='text-violet-950 from-blue-50 to-blue-50 bg-gradient-to-b shadow-[0_0_4px_black] w-[98%] max-w-[600px] rounded-2xl px-1 sm:px-2 py-2 xs:py-[10px] gap-1 flex flex-col items-center justify-center' onSubmit={handleUserRegistration}>
        <div className={`w-full flex items-center justify-around pb-2 drop-shadow-[0_0_2px_gray]`}>
          <h1 className="flex rounded-lg text-3xl lg:text-4xl font-bold sm:font-extrabold text-center w-fit text-red-950 drop-shadow-[0_0_2px_black]">New Resistration</h1>
        </div>
        <div className="flex flex-row sm:flex-row gap-2 items-center justify-evenly w-[98%] max-w-[600px]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <select name="status" value={gender} onChange={(e) => setGender(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-[6px] px-3 rounded-md text-center ring-cyan-600 ring-2' >
              <option value="male" className=''>male</option>
              <option value="female" className=''>female</option>
              <option value="others" className=''>others</option>
            </select>
            <select name="status" value={userRole} onChange={(e) => setRole(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-[6px] px-3 rounded-md text-center ring-cyan-600 ring-2' >
              <option value="seller" className=''>Seller</option>
              <option value="customer" className=''>Customer</option>
            </select>
          </div>
        </div>

        <div className="w-[98%] max-w-[600px] flex flex-col xs:flex-row gap-2 items-center justify-between relative">
          <input name='mobileNo' type="Number" value={mobile_no} onChange={e => setMobileNo(e.target.value)} className='w-full xs:w-fit flex-1 outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='your contact number' required />
        </div>

        <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter your name' required />

        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter your email-id' required />

        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='create a password' required />

        <textarea name='mobileNo' type="text" rows={4} value={userAddress} onChange={e => setAddress(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter your current address' required ></textarea>

        <div className="flex w-[98%] items-center justify-between gap[2px] border-[2px] border-cyan-500 rounded-lg overflow-hidden">
          <div className="w-[50%] text-white/80 bg-orange-900 hover:bg-orange-700 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer border-r-[2px] border-cyan-500" onClick={e => setOption(0)}>cancel</div>
          <input type="submit" value={'Register'} className='w-[50%] text-white/80 bg-red-800 hover:bg-red-600 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer' required />
        </div>
      </form>
    </div>
  )
}