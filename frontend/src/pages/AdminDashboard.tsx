import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify"
// import { BiSolidUserCircle } from "react-icons/Bi"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardMenu from "../components/DashboardMenu";
import { Settings } from "@mui/icons-material";
import Tithes from "./Tithes";

const AdminDashboard = () => {

    const [username, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [userData, setUserData] = useState<any>()
    const accessToken = localStorage.getItem('accessToken')


    useEffect(() => {
        console.log("Access token", accessToken)

        // fetch("http://localhost:3000/user/profile", {
        fetch("https://ffcm.zeabur.app/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(res => {
            if (res.ok) {
                // toast("Success")
                return res.json()
            } else {
                toast("Error")
                return ""
            }
        }).then(data => {
            if (data) {
                console.log("Data ", data)
                setUserData(data)
                setUsername(data.username)
                setFirstName(data.firstName)
                setLastName(data.lastName)
            }
        })
    }, [])


    return (
        <div className="admin-dashboard flex flex-col ">
            <Navbar />
            <DashboardMenu />
            <p className="text-md font-bold absolute top-20 ml-5 md:top-0 md:relative text-gray-600">Welcome back, {firstName && firstName}</p>
            <div className="pt-24 flex flex-col p-2 ">

                <div className="flex flex-col gap-2 mt-10 px-5 md:px-32 text-gray-900 font-semibold ">
                    <AccountCircleIcon sx={{ fontSize: 100 }} className="self-center text-yellow-500" />
                    <h2 className="text-2xl font-semibold">Profile Info</h2>
                    <hr className="bg-black mb-4" />
                    <table className="card text-gray-700 md:w-[500px] self-center" >
                        <tr>
                            <td>First Name</td>
                            <td>{userData && userData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{userData && userData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>{userData && userData.phone}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{userData && userData.username}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{userData && "Admin"}</td>
                        </tr>

                    </table>
                    <hr className="bg-black mt-4" />
                </div>
                <button className="card mt-4 text-xl bg-gray-300 flex items-center gap-1 self-center py-2 font-bold text-gray-700 px-4 rounded-md">
                    <Settings />
                    <p>Edit</p>
                </button>
            </div>

            <Tithes />
        </div>
    )
}

export default AdminDashboard