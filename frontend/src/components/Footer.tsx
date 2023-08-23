import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="bg-black text-white px-7 py-5 flex flex-col gap-5">

            <div className="text-yellow-500">
                <InstagramIcon />
                <FacebookOutlinedIcon />
                <TwitterIcon />
            </div>
            <div>
                <p className="text-lg font-bold">Quick Links</p>
                <div className="text-yellow-500">
                    <p>Sermons</p>
                    <p>Events</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold">Contact Info</h3>
                <div>
                    <p className="text-gray-500">Address:</p>
                    <p>4, Ogheghe Road, Off Sapele Road, Benin, Nigeria</p>
                </div>
                <div>
                    <p className="text-gray-400">Telephone:</p>
                    <p className="">0703 395 3119, 0703 395 3116</p>
                </div>
            </div>
            <p className="text-gray-400 self-center">Copyright ©2023 All Rights Reserved</p>
        </div>
    )
}

export default Footer