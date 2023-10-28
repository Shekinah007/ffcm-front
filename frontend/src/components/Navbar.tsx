import { ReactElement, useState } from 'react';

import shieldLogo from "../assets/images/shieldLogo.png"
import churchLogo from "../assets/images/ffcmLogo.png"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Link } from "react-router-dom"
// interface Menu {
//     currentPage: string;
// }


const Navbar = (): ReactElement => {

    const [open, setOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<String>("Home")

    const highlightPage = (page: string): void => {

        // window.scrollTo(0, 0);

        setTimeout((): void => {
            setCurrentPage(page)
            setOpen(false);
        }, 0)

    }

    return (
        <div className={`justify-center flex fixed w-screen flex-col 
         md:flex-row  md:justify-between min-h-[40px] items-center z-20 px-3 md:p-
         duration-400 md:px-5 ${open ? "bg-gray-800/90 text-white" : "bg-black"}
         text-white border-b-2 border-yellow-500 `}
        >
            {/* <div className={`overlay fixed h-screen w-screen top-0 duration-300 ${!open && "h-[0px]"} bg-black/50 -z-50`}></div> */}

            <div className="" >
                <img src={shieldLogo} alt="logo home" className='h-16 hidden md:block' />
            </div>
            <div className={`absolute top-50% left-3 w-11/12 flex flex-row items-center justify-between gap-2 duration-500 -translate-y-0 ${open && "-translate-y-44"} md:hidden`}>
                <p className="page  text-lg"> {currentPage} </p>
                <Link to={"/"}><img src={churchLogo} alt="logo" className="h-7" /></Link>
            </div>
            <div className={`nav h-0 overflow-hidden py-0 px-3 duration-300 text-xl   ${open && 'h-64 pt-0 mt-5'} font-semibold md:p-3 md:py-3 md:h-10 flex flex-col justify-center  md:justify-end md:items-center gap-3 w-screen md:static md:flex-row`} >
                <Link to={"/"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" onClick={() => { highlightPage("Home"); }}> <span className="md:hidden">-</span> Home  </Link>
                {/* <hr /> */}
                {/* <Link to={"/contact"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" onClick={() => { highlightPage("Contact"); }}> <span className="md:hidden">-</span> Contact - </Link> */}
                <a href="#about" className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" > <span className="md:hidden">-</span> About  </a>
                {/* <hr /> */}

                <a href="#contact" className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg"> <span className="md:hidden">-</span> Contact  </a>
                <Link to={"/payments"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg"> <span className="md:hidden">-</span> Giving  </Link>
                {/* <hr /> */}

                <Link to={"/signin"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" onClick={() => { highlightPage("SignIn") }}> <span className="md:hidden">-</span> SignIn  </Link>
                {/* <hr /> */}

                <Link to={"/adminDashboard"} className="p-1 hover:text-yellow-500 duration-300 md:border-b-2 border-yellow-500 hover:border-white hover:rounded-lg" onClick={() => { highlightPage("Dashboard") }}> <span className="md:hidden">-</span> Dashboard  </Link>

            </div>
            <div>
                <span className={`menu-btn md:hidden text-yellow-500 self-center translate-y-6 duration-500 text-3xl border-2 ${!open && " -scale-y-100"} h-12 w-12 bg-black flex items-center justify-center rounded-full`} onClick={(): void => { setOpen(prev => !prev) }}>
                    <ExpandLessIcon />
                </span>
            </div>
        </div >
    )
}


export default Navbar