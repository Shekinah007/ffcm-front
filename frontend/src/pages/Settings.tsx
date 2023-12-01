import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import { useState } from 'react';
import { AddAPhoto, Image, Upload, Visibility } from '@mui/icons-material';
import { uploadFile } from "@uploadcare/upload-client"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from '../components/LoadingOverlay';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

const EditProfile = ({ userData, setEditProfile }: any) => {

    const navigate = useNavigate()

    console.log("User Data: ", userData)

    const [visibility, setVisibility] = useState(false)
    const [profileImg, setProfileImg] = useState<any>()
    const [firstName, setFirstName] = useState(userData.firstName)
    const [lastName, setLastName] = useState(userData.lastName)
    const [userName, setUsername] = useState(userData.username)
    const [phone, setPhone] = useState(userData.phone)
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()



    const handleSave = async (e: any) => {
        console.log("Saving profile...")
        e.preventDefault();

        const result = await uploadFile(
            profileImg,
            {
                publicKey: "cba573f3244b1ee1b38f",
                store: "auto"
            }
        )

        const imgUrl = result.cdnUrl
        console.log("Result: ", result)
        console.log("IMAGE URL: ", imgUrl)
        console.log(profileImg);
    }


    const handleUpdate = async (e: any) => {


        e.preventDefault()

        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        setVisibility(true)
        let imgUrlResult;

        try {
            const result = await uploadFile(
                profileImg,
                {
                    publicKey: "cba573f3244b1ee1b38f",
                    store: "auto"
                }
            )
            imgUrlResult = result.cdnUrl

        } catch (err) {
            toast("Select Profile Image Please!!")
            console.log(err)
            setVisibility(false)
            return
        }

        const userDataTemp = {
            firstName: firstName,
            lastName: lastName,
            username: userName,
            phone: phone,
            imgUrl: imgUrlResult
            // password: password,
        }

        if (!firstName || !lastName || !userName) {
            toast.info("All required fields must be filled in!")
            return
        }

        if (userName.match(emailReg) == null) {
            toast.info('Your email address is not valid. E.g "justice@example.com"')
            return;
        }

        if (password !== confirmPassword) {
            toast.info("Passwords do mot match!")
            return;
        }
        console.log("passed")
        // fetch("http://localhost:3000/user/updateProfile", {
        // fetch("https://ffcm.zeabur.app/auth/register", {
        fetch("https://eager-dog-onesies.cyclic.app/user/updateProfile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDataTemp),
        }).then(res => {
            if (res.ok) {
                toast.success("Update successful")
                return res.json()
            } else {
                console.log("Error, unable to complete fetch request");
                return ""
            }
        }).then(data => {
            console.log("DATA", data)
            if (!data) {
                toast.error("Update failed")
            }
            setTimeout(() => {
                setVisibility(false)
                setEditProfile((prev: boolean) => !prev)
                navigate("/adminDashboard")
            }, 800)
        }).finally(() => {
            setVisibility(false)
        })
        console.log("Submitted!!")
    }

    return (
        <div className="animate-rec bg-white/0 min-h-screen card p-3 pt-20 pb-[50px] rounded-lg w-screen overflow-hidden flex flex-col items-center justify-center self-center">
            <LoadingOverlay visibility={visibility} />

            <h2 className="font-semibold text-xl mb-1 text-gray-700 self-start md:self-center md:text-3xl ">Edit Profile</h2>
            <hr className="bg-gray-300 w-[330px] mb-4 h-1" />



            <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-2"
                    onSubmit={(e) => handleUpdate(e)}
                >
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold self-center  text-sm 
                            text-yellow-500" htmlFor="profile-pic">
                            {/* <AddAPhoto sx={{ fontSize: 70 }}></AddAPhoto> */}
                            <AddPhotoAlternateRoundedIcon sx={{ fontSize: 70 }} />
                        </label>
                        <input id="profile-pic" type="file" title="profile-pic" className="h-0 w-0"
                            onChange={(e) => {
                                setProfileImg(e.target.files ? e.target.files[0] : "")
                            }} accept="image/*,.png,.jpg"
                        ></input>
                    </div>
                    <div className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-6">
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-gray-500 text-sm" htmlFor="firstName">
                                First Name
                            </label>
                            <div className="card bg-gray-200 rounded-md p-1">
                                <PersonOutlineOutlinedIcon />
                                <input className="w-[300px] p-1 bg-gray-200" id="firstName" type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label className="font-semibold text-gray-500 text-sm" htmlFor="lastName">Last Name</label>
                            <div className="card bg-gray-200 rounded-md p-1">
                                <PersonOutlineOutlinedIcon />
                                <input className="rounded-md p-1 w-[300px] bg-gray-200" id="lastName" type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label className="font-semibold text-gray-500 text-sm" htmlFor="email">Email</label>
                            <div className="card bg-gray-200 rounded-md p-1">
                                <EmailOutlinedIcon />
                                <input className="rounded-md p-1 w-[300px] bg-gray-200" id="email" type="email"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={userName}
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label className="font-semibold text-gray-500 text-sm" htmlFor="phone">Phone</label>
                            <div className="card bg-gray-200 rounded-md p-1">
                                <PhoneEnabledOutlinedIcon />
                                <input className="rounded-md p-1 w-[300px] bg-gray-200" id="phone" type="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label className="font-semibold text-gray-500 text-sm" htmlFor="currentPassword">Current Password</label>
                            <div className="card bg-gray-200 rounded-md p-1">
                                <LockPersonOutlinedIcon />
                                <input className="rounded-md p-1 w-[300px] bg-gray-200" id="currentPassword" type="password"></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label className="font-semibold text-gray-500 text-sm" htmlFor="newPassword">New Password</label>
                            <div className="card bg-gray-200 rounded-md p-1">
                                <LockPersonOutlinedIcon />
                                <input className="rounded-md p-1 w-[300px] bg-gray-200" id="newPassword" type="password"></input>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-black w-[330px] mb-2 mt-2" />
                    <button
                        className="p-2 bg-blue-600 self-center justify-self-center font-semibold text-white text-lg rounded-md"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div >
    )
}

export default EditProfile