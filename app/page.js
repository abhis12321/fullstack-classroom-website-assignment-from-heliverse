"use client"
import React from 'react'
import UserRegister from './__components/UserRegistration';

export default function page() {
  const [option , setOption] = React.useState(0);
  return (
    <div className=''>
      fullstack classroome website
      <UserRegister setOption={setOption} />
    </div>
  )
}
