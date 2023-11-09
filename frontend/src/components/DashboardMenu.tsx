import { useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { AccountCircle, DashboardCustomize, FileOpen, NoteAdd, Settings } from '@mui/icons-material';

const DashboardMenu = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className={`top-1/2 duration-300 -mt-[150px] text-md md:text-lg w-[150px] 
            left-0 fixed bg-black/70 py-5 px-4 rounded-l-none text-white  rounded-md  border-r-2 border-l-0 border-yellow-500
            ${menuOpen ? "translate-x-0" : "-translate-x-[150px] "}
        `}>
            <button
                onClick={() => { setMenuOpen(prevState => !prevState) }}
                className={`absolute top-1/2 -mt-[10px] flex items-center justify-center -right-[28px] py-1 pl-0 px-0 
                pr-1 rounded-r-md  bg-black/60 hover:text-yellow-300
                ${menuOpen && "-scale-x-100 rounded-r-none rounded-l-md pl-1 -right-[33px] text-yellow-300"}
                `}>
                {/* {">>"} */}
                <DoubleArrowIcon />
            </button>
            <div className="flex flex-col gap-9 items-start duration-150">
                <div className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <AccountCircle sx={{ fontSize: 30 }} />
                        <button>Profile</button>
                    </div>
                    <hr className="w-[100px]" />
                </div>
                <div className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <NoteAdd />
                        <button>Records</button>
                    </div>
                    <hr className="w-[100px] " />
                </div>
                <div className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <FileOpen />
                        <button>Entries</button>
                    </div>
                    <hr className="w-[100px] " />
                </div>
                <div className="hover:text-yellow-400 duration-150 hover:scale-110">
                    <div className="flex gap-1 items-center">
                        <Settings />
                        <button>Settings</button>
                    </div>
                    <hr className="w-[100px] " />
                </div>

            </div>
        </div>
    )
}

export default DashboardMenu