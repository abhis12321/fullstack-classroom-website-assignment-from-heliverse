import React, { useState } from 'react'

export default function ClassRoomForm() {
    const [classroom, setClassroom] = useState('');
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [timeTable, setTimeTable] = useState([
        { day: "Sunday", start: "10AM", end: "5PM" },
        { day: "Monday", start: "10AM", end: "5PM" },
        { day: "Tuesday", start: "10AM", end: "5PM" },
        { day: "Wednesday", start: "10AM", end: "5PM" },
        { day: "Thursday", start: "10AM", end: "5PM" },
        { day: "Friday", start: "10AM", end: "5PM" },
        { day: "Saturday", start: "10AM", end: "5PM" },
    ])

    const handleTimeTable = (index, timeName, value) => {
        let table = [...timeTable];
        table[index][timeName] = value.toUpperCase();
        setClassroom(table);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const body = { classroom, name, email, timeTable };
    }


    return (
        <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90" >
            <form className="w-[98%] max-w-[700px] gap-1 flex flex-col items-center justify-center p-6 bg-white text-red-950 font-semibold shadow-[0_0_10px_gray_inset] rounded-lg" onSubmit={handleSubmit}>
                <div className={`w-full flex items-center justify-around pb-2 drop-shadow-[0_0_2px_black]`}>
                    <h1 className="py-4 flex rounded-lg text-3xl lg:text-4xl font-bold sm:font-extrabold text-center w-fit text-red-900 drop-shadow-[0_0_1px_white]">New Class-room</h1>
                </div>
                <input name='classroom' type="text" value={classroom} onChange={e => setClassroom(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder="enter classroom name" required />

                <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder="teacher's name" required />

                <input name='t-email' type="email" value={email} onChange={e => setEmail(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder="teacher's email" required />

                {
                    timeTable.map((data, index) =>
                        <div className="flex justify-between items-center gap-2 w-[98%] max-w-[600px]">
                            <div className="w-[32%] ">{data.day}</div>
                            <input type="text" value={data.start} onChange={e => handleTimeTable(index, "start", e.target.value)} className='w-[32%] outline-none invalid:text-pink-600 font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' />
                            <input type="text" value={data.end} onChange={e => handleTimeTable(index, "end", e.target.value)} className='w-[32%] outline-none invalid:text-pink-600 font-semibold hover:bg-violet-800/20 placeholder:text-gray-500 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_brown_inset] py-2 px-3 rounded-md mx-auto text-center' />
                        </div>
                    )
                }

                <div className="flex w-[98%] items-center justify-between gap[2px] border-[2px] border-cyan-500 rounded-lg overflow-hidden">
                    {/* <div className="w-[50%] text-white/80 bg-orange-900 hover:bg-orange-700 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer border-r-[2px] border-cyan-500" onClick={e => setOption(0)}>cancel</div> */}
                    <input type="submit" value={'Register'} className='w-[100%] text-white/80 bg-red-800 hover:bg-red-600 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer' required />
                </div>

            </form>
        </div>
    )
}
