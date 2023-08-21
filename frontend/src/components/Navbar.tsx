import React from 'react'
import { useState } from 'react';

import shieldLogo from "../assets/images/shieldLogo.png"

interface Menu {
    open: boolean,
}


const Navbar = () => {

    const [open, setOpen] = useState<boolean>(true)

    return (
        <div className='flex fixed w-screen flex-row gap-2 justify-between  items-center z-20  p-3  md:px-10 bg-black text-white'>
            <div className="" >
                <img src={shieldLogo} alt="logo home" className='h-16 hidden md:block' />
            </div>
            <div>
                {/* <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x "></i><i className="fa text-black fa-facebook fa-stack-1x fa-inverse"></i></span>
                <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-twitter text-black fa-stack-1x fa-inverse"></i></span>
                <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-instagram  text-black fa-stack-1x fa-inverse"></i></span> */}
                <span className="menu-btn md:hidden" onClick={(): void => { setOpen(prev => !prev); console.log(open) }}>
                    Menu
                    <i className="fa fa-2x fa-bars"></i>
                </span>

            </div>
            <div className={`nav  h-0 overflow-hidden py-0 duration-300  ${open && '-translate-y-0 h-48'} md:p-3  md:py-3  md:h-10 flex flex-col fixed top-10 left-0 bg-black gap-3 w-screen md:w-auto  md:static  md:flex-row `} >
                <a href="#"> - Home</a>
                <a href="#"> - About</a>
                <a href="#"> - Sermons</a>
                <a href="#"> - Gallery</a>
                <a href="#"> - Contact</a>
            </div>
        </div >
    )
}

// const Navbar = () => {
//     const [menu, setMenu] = useState<boolean>(false)

//     return (
//         <div className='flex flex-row gap-2 justify-between w-screen items-center  p-3  md:px-10 bg-slate-900 text-gray-400'>
//             <p>FFCM</p>
//             <button className='"menu-btn md:hidden' onClick={() => { setMenu(prevState => !prevState); console.log(menu) }}>MENU</button>
//             <div className={`menu -translate-y-72 ${menu && '-translate-y-0'}`}>
//                 <a href="#">Home</a>
//                 <a href="#">About</a>
//                 <a href="#">Sermons</a>
//                 <a href="#">Gallery</a>
//                 <a href="#">Contact</a>
//             </div>
//         </div>

//     )
// }

export default Navbar