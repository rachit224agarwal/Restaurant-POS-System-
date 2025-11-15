import React from 'react'
import Greetings from '../components/Greetings'
import BottomNav from '../components/BottomNav'
import MiniCard from '../components/MiniCard'
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from '../components/RecentOrders';
import PopularDishes from '../components/PopularDishes';

const Home = () => {
  return (
   <section className="bg-[#1f1f1f] min-h-screen overflow-y-auto flex flex-col lg:flex-row gap-3 pb-28">
    <div className='flex-[3]'>
        <Greetings />
        <div className='flex item-center gap-3 w-full px-8 mt-8'>
            <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
            <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6}/>
        </div>
        <RecentOrders />
    </div>
    <div className='flex-[2]'>
        <PopularDishes />
    </div>
    <BottomNav/>
   </section>

  )
}

export default Home
