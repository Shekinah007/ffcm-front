import { ReactElement, useEffect, useState } from 'react';

import shieldLogo from "../assets/images/shieldLogo.png"
import churchLogo from "../assets/images/ffcmLogo.png"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Link } from "react-router-dom"
import { Home } from '@mui/icons-material';


const Navbar = ({ isSignedIn, currentPage, setCurrentPage }: any) => {

    const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
    const [visible, setVisible] = useState(true)
    const [open, setOpen] = useState<boolean>(false);
    // const [currentPage, setCurrentPage] = useState<String>("Home")

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        if (currentPage == "Home") {
            window.addEventListener('scroll', handleScroll)
        }
        return () => window.removeEventListener("scroll", handleScroll)
    })



    const highlightPage = (page: string): void => {

        // window.scrollTo(0, 0);

        setTimeout((): void => {
            setCurrentPage(page)
            setOpen(false);
        }, 0)

    }

    return (
        <div className={`duration-300 justify-center flex fixed z-50 w-screen flex-col 
         md:flex-row  md:justify-between min-h-[40px] items-center px-3 md:p-
         duration-400 md:px-5 ${open ? "bg-gray-800/90 text-white" : "bg-black"}
         text-white border-b-2 border-yellow-500 ${!visible && !open && "-translate-y-20"}`}
        >

            <div className="" >

                <img src={shieldLogo} alt="logo home" className='h-16 hidden md:block' />
            </div>
            <div className={`absolute top-50% left-3 w-11/12 flex flex-row items-center justify-between gap-2 duration-500 -translate-y-0 ${open && "-translate-y-44"} md:hidden`}>
                <p className="page  text-lg"> {currentPage} </p>
                <Link to={"/"}><img src={churchLogo} alt="logo" className="h-7" /></Link>
            </div>
            <div className={`nav h-0 overflow-hidden py-0 px-3 duration-300 text-xl   ${open && 'h-64 pt-0 mt-5'} font-semibold md:p-3 md:py-3 md:h-10 flex flex-col justify-center  md:justify-end md:items-center gap-3 w-screen md:static md:flex-row`} >
                <Link to={"/"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg"
                    onClick={() => { highlightPage("Home"); }}>
                    <span className="md:hidden">- </span>
                    Home
                    <hr className="mt-1" />
                </Link>

                <Link to={"/"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg"
                    onClick={() => { highlightPage("Gallery"); }}>
                    <span className="md:hidden">- </span>
                    Gallery
                    <hr className="mt-1" />
                </Link>

                <Link to={"/leadership"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg"
                    onClick={() => { highlightPage("Leardership"); }}>
                    <span className="md:hidden">- </span>
                    Leadership
                    <hr className="mt-1" />
                </Link>

                {
                    currentPage === "Home" &&
                    <a href="#about" className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" >
                        <span className="md:hidden">- </span> About
                        <hr className="mt-1" />
                    </a>
                }

                {
                    !isSignedIn && <Link to={"/signin"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg"
                        onClick={() => { highlightPage("SignIn") }}>
                        <span className="md:hidden">- </span>
                        Sign In
                        <hr className="mt-1" />
                    </Link>
                }

                {
                    isSignedIn &&
                    <Link to={"/adminDashboard"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" onClick={() => { highlightPage("Dashboard") }}>
                        <span className="md:hidden">-</span> Dashboard
                        <hr className="mt-1" />
                    </Link>
                }

            </div>
            <div>
                <span className={`menu-btn md:hidden text-yellow-500 self-center translate-y-6 duration-500 text-3xl border-2 ${!open && "-scale-y-100"} h-12 w-12 bg-black flex items-center justify-center rounded-full`} onClick={(): void => { setOpen(prev => !prev) }}>
                    <ExpandLessIcon />
                </span>
            </div>
        </div >
    )
}


export default Navbar