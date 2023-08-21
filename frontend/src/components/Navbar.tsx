import React from 'react'
import { useState } from 'react';

interface Menu {
    open: boolean,
}


const Navbar = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className='flex flex-row gap-2 justify-between w-screen items-center  p-3  md:px-10 bg-slate-900 text-gray-400'>
            <p className="">Flaming Faith Covenant Ministries</p>
            <div className="menu-btn md:hidden" onClick={(): void => { setOpen(prev => !prev); console.log(open) }} >Menu</div>
            <p className={`nav -translate-y-72 duration-500 ${open && '-translate-y-0'} p-3 flex flex-col fixed top-10 left-0 bg-slate-900 gap-3 w-screen md:w-auto  md:static  md:flex-row md:translate-y-0`} >
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Sermons</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
            </p>
        </div>
    )
}

export default Navbar