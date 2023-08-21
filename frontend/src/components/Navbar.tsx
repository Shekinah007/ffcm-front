import React from 'react'
import { useState } from 'react';

import shieldLogo from "../assets/images/shieldLogo.png"

interface Menu {
    open: boolean,
}


const Navbar = () => {

    const [open, setOpen] = useState<boolean>(true)

    return (
        <div className='justify-center flex fixed w-screen flex-col md:flex-row  md:justify-between min-h-[40px] items-center z-20 px-3 md:p-2  md:px-10 bg-white/20 text-white border-b-2 border-white'>
            <div className="" >
                <img src={shieldLogo} alt="logo home" className='h-16 hidden md:block' />
            </div>
            <div className={`nav  h-0 overflow-hidden py-0 px-3 duration-300  ${open && ' h-48'} md:p-3   md:py-3  md:h-10 flex flex-col justify-end md:items-center  top-28 left-0  gap-3 w-screen   md:static  md:flex-row `} >
                <a href="#"> - Home</a>
                <a href="#"> - About</a>
                <a href="#"> - Sermons</a>
                <a href="#"> - Gallery</a>
                <a href="#"> - Contact</a>
            </div>

            <div>
                <span className={`menu-btn md:hidden text-gray-400 self-center translate-y-6 duration-500 text-3xl ${!open && " -scale-y-100"} h-12 w-12 bg-black flex items-center justify-center rounded-full`} onClick={(): void => { setOpen(prev => !prev); console.log(open) }}>
                    ^
                </span>
            </div>
        </div >
    )
}



export default Navbar