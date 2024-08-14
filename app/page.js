"use client"
import React, { useState } from 'react'
import UserLogin from './__components/UserLogin';
import { useAuth } from './__components/AuthProvider';
import UserProfile from './__components/UserProfile';

export default function page() {
  const [option, setOption] = useState(0);
  const USER = useAuth();
  return (
    <div className=''>
      {
        USER.user ? 
        <UserProfile option={option} setOption={setOption} />
        :
        <UserLogin />
      }
    </div>
  )
}
