import { useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { AccountCircle, DashboardCustomize, FileOpen, Logout, NoteAdd, Settings } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardMenu = ({ handlePage }: any) => {

    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className={`z-10  top-0 pt-[70px] md:pt-[100px] h-screen duration-300 mt-0
            text-md md:text-lg w-[250px]  left-0
           fixed  bg-black/70 py-5 px-4 rounded-l-none text-white rounded-md border-r-2 border-l-0 border-yellow-300 
            ${menuOpen ? "translate-x-0" : "-translate-x-[250px] md:-translate-x-[250px]"}
        `}>
            <button
                onClick={() => { setMenuOpen(prevState => !prevState) }}
                className={`absolute top-1/2 -mt-[10px] flex items-center justify-center -right-[28px] py-3 pl-0 px-0 
                pr-1 rounded-r-md  bg-black/60 hover:text-yellow-300
                ${menuOpen && "-scale-x-100 rounded-r-none rounded-l-md pl-1 -right-[33px] text-yellow-300"}
                `}>
                {/* {">>"} */}
                <DoubleArrowIcon />
            </button>
            <div className="flex flex-col gap-9 items-start duration-150">
                <Link to={"/adminDashboard"} className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <AccountCircle sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("Profile")}>Your Profile</button>
                    </div>
                    <hr className="w-[120px]" />
                </Link>
                <Link to={"/adminDashboard/settings"} className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <NoteAdd />
                        <button onClick={() => handlePage("Tithes")}>Records</button>
                    </div>
                    <hr className="w-[100px] " />
                </Link>
                <Link to={"/adminDashboard/entries"} className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <FileOpen />
                        <button onClick={() => handlePage("Entries")}>Entries</button>
                    </div>
                    <hr className="w-[110px] " />
                </Link>
                <Link to={"/adminDashboard/settings"} className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <Settings />
                        <button onClick={() => handlePage("Settings")}>Settings</button>
                    </div>
                    <hr className="w-[120px] " />
                </Link>
                <Link to={"/adminDashboard/members"} className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <AccountCircle sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("Management")}>Members</button>
                    </div>
                    <hr className="w-[130px] " />
                </Link>
                <Link to={"/adminDashboard/memberProfile"} className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <AccountCircle sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("MemberProfile")}>Member Profile</button>
                    </div>
                    <hr className="w-[170px] " />
                </Link>

                <Link to={"/adminDashboard/logout"} className="hover:text-yellow-400 duration-150 hover:scale-110 justify-self-end">
                    <div className="flex gap-1 items-center">
                        <Logout sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("LogOut")}>Log Out</button>
                    </div>
                    <hr className="w-[180px] " />
                </Link>
            </div>
        </div>
    )
}

export default DashboardMenu