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
        <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90 py-8" >
            <div className="flex flex-col p-2 gap-[6px] items-start justify-center bg-white rounded-lg w-[98%] font-semibold relative overflow-auto">
                <div className="mx-auto absolute top-1 left-[8px] bg-red-600/20 px-3 py-1 rounded-full text-red-600 ring-2 ring-red-600 cursor-pointer text-xl hover:bg-white" onClick={() => setOption(0)}>X</div>
                <button className={`mx-auto py-[5px] px-6 rounded-lg text-white bg-blue-900 hover:bg-blue-600  text-sm font-semibold`} onClick={() => setOption(6)}>add new classes</button>

                <table className="w-full overflow-auto" style={{border:"2px solid black"}}>
                    <thead className='bg-gray-200'>
                        <tr className="">
                            <th className="" style={{border:"2px solid black"}}>No</th>
                            <th className="" style={{border:"2px solid black"}}>classroom</th>
                            <th className="" style={{border:"2px solid black"}}>teacher</th>
                            <th className="" style={{border:"2px solid black"}}>teacher&apos;s email</th>
                            <th className="" style={{border:"2px solid black"}}>sunday</th>
                            <th className="" style={{border:"2px solid black"}}>monday</th>
                            <th className="" style={{border:"2px solid black"}}>tuesday</th>
                            <th className="" style={{border:"2px solid black"}}>wednesday</th>
                            <th className="" style={{border:"2px solid black"}}>thursday</th>
                            <th className="" style={{border:"2px solid black"}}>friday</th>
                            <th className="" style={{border:"2px solid black"}}>saturday</th>
                        </tr>
                    </thead>
                    <tbody className="bg-violet-800/10">
                        {
                            classrooms?.map((classroom, index) =>
                                <tr className="hover:bg-violet-800/15 cursor-pointer" key={classroom._id} style={{border:"2px solid black"}}>
                                    <td className="text-center" style={{border:"2px solid black"}}>{index + 1}</td>
                                    <td className="text-center" style={{border:"2px solid black"}}>{classroom.classroom}</td>
                                    <td className="text-center" style={{border:"2px solid black"}}>{classroom.teacherName}</td>
                                    <td className="text-center" style={{border:"2px solid black"}}>{classroom.teacherEmail}</td>
                                    {
                                        classroom?.timeTable?.map((schedule, index) =>
                                            <td className='text-center' key={index} style={{border:"2px solid black"}}>
                                                <span className="text-center">{schedule.start}</span>
                                                <span className="text-center">-</span>
                                                <span className="text-center">{schedule.end}</span>
                                            </td>
                                        )
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
