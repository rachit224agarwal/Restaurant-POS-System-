import React from 'react'
import butterChicken from '../assets/butter-chicken-4.jpg'
import paneerTikka from '../assets/paneer-tika.webp'
import choleBhature from '../assets/chole-bhature.jpg'
import masalaDosa from '../assets/masala-dosa.jpg'
import biryani from '../assets/hyderabadibiryani.jpg'
import gulabJamun from '../assets/gulab-jamun.webp'
import pooriSabji from '../assets/poori-sabji.webp'
import roganJosh from '../assets/rogan-josh.jpg'
import palakPaneer from '../assets/Saag-Paneer-1.jpg'
import rajmaChawal from '../assets/rajma-chawal-1.jpg'
import { color } from 'framer-motion';

export const popularDishes = [
    {
      id: 1,
      image: butterChicken,
      name: 'Butter Chicken',
      numberOfOrders: 250,
    },
    {
      id: 2,
      image: palakPaneer,
      name: 'Palak Paneer',
      numberOfOrders: 190,
    },
    {
      id: 3,
      image: biryani,
      name: 'Hyderabadi Biryani',
      numberOfOrders: 300,
    },
    {
      id: 4,
      image: masalaDosa,
      name: 'Masala Dosa',
      numberOfOrders: 220,
    },
    {
      id: 5,
      image: choleBhature,
      name: 'Chole Bhature',
      numberOfOrders: 270,
    },
    {
      id: 6,
      image: rajmaChawal,
      name: 'Rajma Chawal',
      numberOfOrders: 180,
    },
    {
      id: 7,
      image: paneerTikka,
      name: 'Paneer Tikka',
      numberOfOrders: 210,
    },
    {
      id: 8,
      image: gulabJamun,
      name: 'Gulab Jamun',
      numberOfOrders: 310,
    },
    {
      id: 9,
      image: pooriSabji,
      name: 'Poori Sabji',
      numberOfOrders: 140,
    },
    {
      id: 10,
      image: roganJosh,
      name: 'Rogan Josh',
      numberOfOrders: 160,
    },
  ];




const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6'>
        <div className='bg-[#1a1a1a] w-full rounded-lg'>
             <div className='flex justify-between items-center px-6 py-4'>
            <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>Popular Dishes</h1>
            <a href="" className='text-[#025cca] text-sm font-semibold'>View All</a>
        </div>

        <div className='overflow-scroll h-[680px] scrollbar-hide'>
            {
                popularDishes.map((dish) => {
                    return (
                        <div key={dish.id} className='flex items-center gap-4 px-6 py-3 mt-3 border-b border-[#3a3939]'>
                            <h1 className='text-[#f5f5f5] font-bold text-xl mr-5'>{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                            <img src={dish.image} alt={dish.name} className='h-[50px] w-[50px] rounded-full object-cover tracking-wide'/>
                            <div className='flex flex-col items-start'>
                                <h1 className='text-[#f5f5f5] text-md font-semibold mt-1'>{dish.name}</h1>
                                <p className='text-[#ababab] text-sm'><span className='text-[#ababab]'>Orders: </span>{dish.numberOfOrders}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default PopularDishes
