import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder, MdTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { get } from 'mongoose';

const BottomNav = () => {

    const navigate = useNavigate();
    const [isModelOpen , setIsModelOpen] = useState(false);
    const [getCount, setGetCount] = useState(0);
    const openModel = () => {
        setIsModelOpen(true);
    }
    const closeModel = () => {
        setIsModelOpen(false);
    }
    const increment = () => {
        if(getCount >= 6) return;
        setGetCount((prevCount) => prevCount + 1);
    }
    const decrement = () => {
        if(getCount <= 0) return;
        setGetCount((prevCount) => prevCount - 1);
    }

  return (
    <div className='fixed bottom-0 right-0 left-0 bg-[#262626] p-2 h-16 flex justify-around'>
      <button onClick={() => navigate("/")} className='flex justify-center items-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><FaHome className='inline mr-4' size={20} /><p>Home</p></button>
      <button onClick={() => navigate("/orders")} className='flex justify-center items-center text-[#f5f5f5] bg-[#] w-[200px]'><MdOutlineReorder className='inline mr-4' size={20} /><p>Orders</p></button>
      <button onClick={() => navigate("/tables")} className='flex justify-center items-center text-[#f5f5f5] bg-[#] w-[200px]'><MdTableBar className='inline mr-4' size={20} /><p>Tables</p></button>
      <button className='flex justify-center items-center text-[#f5f5f5] bg-[#] w-[200px]'><CiCircleMore className='inline mr-4' size={20} /><p>More</p></button>

      <button onClick={openModel} className='absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center'><BiSolidDish size={30} />
      </button>

      <Modal isOpen={isModelOpen} title="Create Order" onClose={closeModel}>
        <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer Name</label>
            <div className='flex items-center border rounded-lg p-3 px-4 bg-[#1f1f1f]' >
                <input type="text" name='' placeholder='Enter customer name' id='' className='bg-transparent flex-1 text-white focus-outline-none' />
            </div>
        </div>
        <div>
            <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer Number</label>
            <div className='flex items-center border rounded-lg p-3 px-4 bg-[#1f1f1f]' >
                <input type="number" name='' placeholder='+91 99999 99999' id='' className='bg-transparent flex-1 text-white focus-outline-none' />
            </div>
        </div>
        <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
            <div className='flex items-center justify-between px-4 py-3 text-[#1f1f1f] rounded-lg'>
                <button onClick={decrement} className='text-yellow-500 text-2xl'>&minus;</button>
                <span className='text-white'>{getCount} Person</span>
                <button onClick={increment} className='text-yellow-500 text-2xl'>&#43;</button>
            </div>
        </div>
        <button onClick={() => navigate("/tables")} className='w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700'>
            Create Order
        </button>
    </Modal>
    </div> 
  )
}

export default BottomNav
