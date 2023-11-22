import { Link } from "react-router-dom"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="bg-black flex flex-col md:py-20 md:px-10 gap-10 border-yellow-500 border-t-2">
            <div className="bg-black text-white px-7 py-5 flex flex-col md:flex-row md:justify-center md:gap-56">

                <div>
                    <p className="text-lg font-bold mb-4">Quick Links</p>
                    <div className="text-yellow-500 flex flex-col gap-3">
                        <Link to={"/sermons"}>Sermons</Link>
                        <Link to={"/events"}>Events</Link>
                        <Link to={"/contact"} onClick={() => { window.scrollTo(0, 0) }}>Contact</Link>
                        <div className="text-yellow-500 mt-6 flex flex-row gap-5 mb-3">
                            <InstagramIcon />
                            <FacebookOutlinedIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Contact Info</h3>
                    <div>
                        <p className="text-gray-500">Addresses:</p>
                        <p>Ogheghe Road, by Iduwe Avenue, Off Sapele Road, Benin, Nigeria (HQ)</p>
                        <hr />
                        <hr />
                        <hr />
                        <p>201, Siluko Rd, Ogida Qtrs, Benin City, Nigeria, Africa, Earth (OGIDA)</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Telephone:</p>
                        <p className="">0703 395 3119, 0703 395 3116</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Email:</p>
                        <p className="">ffcm@gmail.com</p>
                    </div>
                </div>

            </div>
            <p className="text-gray-400 self-center">Copyright ©2023 All Rights Reserved</p>
            {/* <p className="text-gray-400 self-center">
                Image by <a href="https://www.freepik.com/free-vector/white-abstract-background-design_12188678.htm#query=white%20pattern&position=8&from_view=keyword&track=ais&uuid=b30eb286-fc58-4efb-80bf-113de71fd42d">Freepik</a>
            </p> */}
        </div>
    )
}

export default Footer