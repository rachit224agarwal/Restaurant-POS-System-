import React, { useState, useEffect } from 'react';

const Greetings = () => {
  const[dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => { setDateTime(new Date()) });
    return () => { clearInterval(timer) };
  },[]);

  const formattedTime = dateTime.toLocaleTimeString([],{
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit'
  });

  const formattedDate = dateTime.toLocaleDateString([],{
    weekday : 'long',
    month : 'long',
    day : 'numeric'
  })

  const hour = dateTime.getHours();
  const greeting =
   hour<12 ? 'Good Morning' :
   hour<18 ? 'Good Afternoon' :
   'Good Evening';


  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
          {greeting}, Rachit
        </h1>
        <p className="text-[#ababab] text-sm">
          Give your best services to the customers 😀
        </p>
      </div>

      <div className="text-left">
        <h1 className="text-[#f5f5f5] text-2xl font-medium tracking-wide w-[130px]">{formattedTime}</h1>
        <p className="text-[#ababab] text-sm">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Greetings;
