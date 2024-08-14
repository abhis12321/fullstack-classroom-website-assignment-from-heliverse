import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ClassRooms({ setOption }) {
    const [classrooms, setClassrooms] = useState();

    useEffect(() => {
        axios.get("/api/classroom")
            .then(res => res.data)
            .then(data => data.success && setClassrooms(data.classrooms))
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90" >
            <div className="flex flex-wrap p-4 gap-[1px] items-center justify-center bg-white rounded-lg w-[98%] font-semibold">
                <button className={`py-[5px] px-6 rounded-lg text-white bg-blue-900 hover:bg-blue-600  text-sm font-semibold`} onClick={() => setOption(6)}>add new classes</button>
                {
                    classrooms?.map(classroom =>
                        <div className="w-full flex items-center justify-between ring-1 p-2 rounded-lg bg-violet-800/10 hover:bg-violet-800/15 cursor-pointer" key={classroom._id}>
                            <div className="w-[33%]">{classroom.classroom}</div>
                            <div className="w-[33%]">{classroom.teacherName}</div>
                            <div className="w-[33%]">{classroom.teacherEmail}</div>
                            {/* <div className="w-[33%]">{classroom.day}</div>
                    <div className="w-[33%]">{classroom.start}</div>
                    <div className="w-[33%]">{classroom.end}</div> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
