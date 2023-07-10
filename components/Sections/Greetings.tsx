import React from "react";
import { Link } from "react-scroll/modules";

export default function Greeeting(){
    return(
        <div className='flex flex-col items-start jutify-center'>
        <div className='flex flex-col items-center justify-center tracking-wider'>
            <h1 className='pb-4 2xl:pb-8 text-3xl 2xl:text-6xl font-bold'>
                Greets Visitor
            </h1>
            <h3 className='2xl:pb-4 text-xl 2xl:text-2xl'>
                I am Felix Stefan Jost,
            </h3>
            <h3 className='pb-2 2xl:pb-8 text-xl 2xl:text-2xl'>
            Software Developer
            </h3>
            <div className="bg-[#440707] p-3 rounded-lg">
                <img src="me.jpg" className='w-[450px] h-[300px] rounded-lg'/>
            </div>
            <div className='p-2'>
            <button className='p-2 w-[180px] text-xl cursor-pointer duration-300 ease-in shadow-gray-500/50 hover:scale-[1.05]'>
                <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={50} duration={3500}>
                    Visit Guestbook
                </Link>
            </button>
            </div>
        </div>
    </div>
    )
}