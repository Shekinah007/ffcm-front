import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="bg-black text-white px-7 py-5 flex flex-col gap-5">

            <div>
                <InstagramIcon />
                <FacebookOutlinedIcon />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg">Contact Info</h3>
                <div>
                    <p className="text-gray-500">Address:</p>
                    <p>4, Ogheghe Road, Off Sapele Road, Benin, Nigeria</p>
                </div>
                <div>
                    <p className="text-gray-500">Telephone:</p>
                    <p className="text-sm">0703 395 3119, 0703 395 3116</p>
                </div>
            </div>
            <p className="text-gray-500">Copyright ©2023 All Rights Reserved</p>
        </div>
    )
}

export default Footer