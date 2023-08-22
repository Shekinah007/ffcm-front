import { ReactElement, useState } from 'react';

import shieldLogo from "../assets/images/shieldLogo.png"

import { Link } from "react-router-dom"
// interface Menu {
//     open: boolean,
// }


const Navbar = (): ReactElement => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`justify-center flex fixed w-screen flex-col md:flex-row  md:justify-between min-h-[40px] items-center z-20 px-3 md:p-2  md:px-10 ${open ? "bg-white/20" : "bg-black"} text-white border-b-2 border-white`}>
            <div className="" >
                <img src={shieldLogo} alt="logo home" className='h-16 hidden md:block' />
            </div>
            <div className={`nav  h-0 overflow-hidden py-0 px-3 duration-300  ${open && ' h-48'} md:p-3   md:py-3  md:h-10 flex flex-col justify-end md:items-center  top-28 left-0  gap-3 w-screen   md:static  md:flex-row `} >
                {/* <a href="#home" className="p-1 hover:text-red-400 duration-300 md:border-b-2 border-red-400 hover:border-white hover:rounded-lg">  HOME</a> */}
                {/* <a href="#about" className="p-1 hover:text-red-400 duration-300 md:border-b-2 border-red-400 hover:border-white hover:rounded-lg">  ABOUT</a> */}
                <a href="#gallery" className="p-1 hover:text-red-400 duration-300 md:border-b-2 border-red-400 hover:border-white hover:rounded-lg">  WHO WE ARE</a>
                <a href="#contact" className="p-1 hover:text-red-400 duration-300 md:border-b-2 border-red-400 hover:border-white hover:rounded-lg">  CONTACT</a>
                <Link to={"/about"} className="p-1 hover:text-red-400 duration-300 md:border-b-2 border-red-400 hover:border-white hover:rounded-lg" >My About</Link>
                <Link to={"/"} className="p-1 hover:text-red-400 duration-300 md:border-b-2 border-red-400 hover:border-white hover:rounded-lg">Home</Link>
            </div>

            <div>
                <span className={`menu-btn md:hidden text-gray-400 self-center translate-y-6 duration-500 text-3xl border-2 ${!open && " -scale-y-100"} h-12 w-12 bg-black flex items-center justify-center rounded-full`} onClick={(): void => { setOpen(prev => !prev); console.log(open) }}>
                    ^
                    {/* <img src={shieldLogo} alt="menu button" className='h-16' /> */}
                </span>
            </div>
        </div >
    )
}



export default Navbar