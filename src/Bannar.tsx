// import React from 'react';
import Banner from "./assets/banner-stack.png"

const Bannar = () => {
    return (
        <>
        <div className="max-w-6xl grid grid-cols-2 mx-auto pt-10 items-center">

            <div>
          
            <h2 className="text-5xl font-bold"><span className='text-[#0f172a]'>Build Your Ideal</span> <br /> <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>
            <p  className="mt-4 max-w-lg text-slate-500">Explore frontend, backend, database, and tooling options, <br />
                compare them side by side, and put together the stack that fits your <br />
                next project.</p>

                <div className="mt-9 flex gap-3">
                <button className="rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm ">Explore Technologies</button> 
                <button className="rounded-xl px-8 border">Learn More</button> 
                </div>
                </div>

                <div>
                <img src= {Banner}
                 alt=""  className="w-120"/>

                </div>
                
        </div>
        </>
    );
};

export default Bannar;
