import { useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { AccountCircle, DashboardCustomize, FileOpen, Logout, ManageAccounts, NoteAdd, NotificationsNone, Settings, } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardMenu = ({ handlePage, currentPage, setLogoutModal }: any) => {

    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className={`z-[20] top-0 pt-[70px] h-screen duration-300 mt-0 
            text-md md:text-lg w-[250px] md:w-[300px] left-0
           fixed md:relative md:py-0 md:pt-[100px] bg-black/70 md:bg-black/40
            py-5 px-4 rounded-l-none
            text-white rounded-md border-r-2 border-l-0 border-yellow-300 
            ${menuOpen ? "translate-x-0" : "-translate-x-[250px]  md:-translate-x-0"}
        `}>
            <button
                onClick={() => { setMenuOpen(prevState => !prevState) }}
                className={`md:hidden absolute top-1/2 -mt-[30px] flex items-center justify-center -right-[28px] py-3 pl-0 px-0 
                pr-1 rounded-r-md  bg-black/30 hover:text-yellow-300}
                ${menuOpen && "-scale-x-100 rounded-r-none rounded-l-md pl-1 -right-[33px] text-yellow-300"}
                `}>
                {/* {">>"} */}
                <DoubleArrowIcon />
            </button>
            <div className="flex  flex-col gap-9 items-start duration-150">
                <Link to={"/adminDashboard"} className={`hover:text-yellow-400 duration-150 hover:scale-110 ${currentPage === "Profile" ? "text-yellow-300" : ""}`}>
                    <div className="flex gap-1 items-center">
                        <AccountCircle sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("Profile")}>Profile</button>
                    </div>
                    <hr className="w-[200px]" />
                </Link>
                <Link to={"/adminDashboard/settings"} className={`hover:text-yellow-400 duration-150 hover:scale-110 ${currentPage === "Tithes" ? "text-yellow-300" : ""}`}>
                    <div className="flex gap-1 items-center">
                        <NoteAdd />
                        <button onClick={() => handlePage("Tithes")}>Records</button>
                    </div>
                    <hr className="w-[200px] " />
                </Link>

                <Link to={"/adminDashboard/members"} className={`hover:text-yellow-400 duration-150 hover:scale-110 ${currentPage === "Management" ? "text-yellow-300" : ""}`}>
                    <div className="flex gap-1 items-center">
                        <ManageAccounts sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("Management")}>Management</button>
                    </div>
                    <hr className="w-[200px] " />
                </Link>
                <Link to={"/adminDashboard/announcements"} className={`hover:text-yellow-400 duration-150 hover:scale-110 ${currentPage === "Management" ? "text-yellow-300" : ""}`}>
                    <div className="flex gap-1 items-center">
                        <NotificationsNone sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("Announcements")}>Announcements</button>
                    </div>
                    <hr className="w-[200px] " />
                </Link>
                {/* <Link to={"/adminDashboard/logout"} className={`hover:text-yellow-400 duration-150 hover:scale-110 ${currentPage === "LogOut" ? "text-yellow-300" : ""}`}>
                    <div className="flex gap-1 items-center">
                        <Logout sx={{ fontSize: 30 }} />
                        <button onClick={() => handlePage("LogOut")}>Log Out</button>
                    </div>
                    <hr className="w-[200px] " />
                </Link> */}
                <div
                    onClick={() => {
                        setLogoutModal(true)
                        handlePage("LogOut")
                    }}
                    className={`hover:text-yellow-400 duration-150 hover:scale-110 ${currentPage === "LogOut" ? "text-yellow-300" : ""}`}>
                    <div className="flex gap-1 items-center">
                        <Logout sx={{ fontSize: 30 }} />
                        <button onClick={() => {

                        }}>Log Out</button>
                    </div>
                    <hr className="w-[200px] " />
                </div>
            </div>
        </div>
    )
}

export default DashboardMenu