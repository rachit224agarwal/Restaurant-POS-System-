import React, { useState } from 'react'
import BottomNav from '../components/BottomNav'
import BackButton from '../components/BackButton'
import TableCard from '../components/TableCard';
import { tables } from '../constants';

const Tables = () => {

    const[status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-y-auto pb-28">
        <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div className='flex items-center gap-4'>
            <BackButton />
            <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide'>Tables</h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
            <button onClick={()=>setStatus("all")} className={`text-[#ababab] text-lg tracking-wide font-semibold ${status === "all" && "bg-[#383838] "} rounded-lg px-5 py-2`}>All</button>
            <button onClick={()=>setStatus("booked")} className={`text-[#ababab] text-lg tracking-wide font-semibold ${status === "booked" && "bg-[#383838] "} rounded-lg px-5 py-2`}>Booked</button>
        </div>
    </div>
        <div className='flex flex-wrap justify-center gap-7 px-2 py-5'>
            {
                tables.map((table) => {
                    return (
                        <TableCard key={table.id} name={table.name} status={table.status} 
                            initial={table.initial} />
                    )
                })
            }
            
        </div>
      <BottomNav />
    </section>

  )
}

export default Tables
