import React, { useState } from 'react'

export default function ClassRoomForm() {
    const [classroom , setClassroom] = useState('');
  return (
    <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90" >
      <form className="w-[98%] max-w-[700px] flex flex-col items-center justify-center p-6 bg-white text-red-950 font-semibold shadow-[0_0_10px_gray_inset]">

      </form>
    </div>
  )
}
