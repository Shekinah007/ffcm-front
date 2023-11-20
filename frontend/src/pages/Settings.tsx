import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

const EditProfile = () => {
    return (
        <div className="animate-rec bg-white card p-3 mt-10 pt-10 rounded-lg w-screen flex flex-col items-center justify-center self-center">
            <h2 className="font-semibold text-2xl mb-2 self-start ml-9">Edit Profile</h2>
            <hr className="bg-black w-[300px] mb-4" />
            <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold text-gray-500" htmlFor="firstName">
                            First Name
                        </label>
                        <div className="card bg-gray-200 rounded-md p-1">
                            <PersonOutlineOutlinedIcon />
                            <input className="w-[300px] p-1 bg-gray-200" id="firstName" type="text"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="lastName">Last Name</label>
                        <div className="card bg-gray-200 rounded-md p-1">
                            <PersonOutlineOutlinedIcon />
                            <input className="rounded-md p-1 w-[300px] bg-gray-200" id="lastName" type="text"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="email">Email</label>
                        <div className="card bg-gray-200 rounded-md p-1">
                            <EmailOutlinedIcon />
                            <input className="rounded-md p-1 w-[300px] bg-gray-200" id="email" type="email"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="phone">Phone</label>
                        <div className="card bg-gray-200 rounded-md p-1">
                            <PhoneEnabledOutlinedIcon />
                            <input className="rounded-md p-1 w-[300px] bg-gray-200" id="phone" type="phone"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="currentPassword">Current Password</label>
                        <div className="card bg-gray-200 rounded-md p-1">
                            <LockPersonOutlinedIcon />
                            <input className="rounded-md p-1 w-[300px] bg-gray-200" id="currentPassword" type="password"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="newPassword">New Password</label>
                        <div className="card bg-gray-200 rounded-md p-1">
                            <LockPersonOutlinedIcon />
                            <input className="rounded-md p-1 w-[300px] bg-gray-200" id="newPassword" type="password"></input>
                        </div>
                    </div>
                    <hr className="bg-black w-[300px] mb-2 mt-2" />
                    <button className="p-2 bg-blue-600 self-center justify-self-center font-semibold text-white text-lg rounded-md">
                        Save Changes
                    </button>
                </form>
            </div>
        </div >
    )
}

export default EditProfile