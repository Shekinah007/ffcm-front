import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify"
import { BiSolidUserCircle } from "react-icons/Bi"

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
            <div className="pt-24 flex flex-col p-2 ">
                <p className="text-md font-bold absolute top-16 ml-10 md:top-0 md:relative">Welcome, {firstName && firstName}</p>

                <div className="flex flex-col gap-2 mt-5 px-5 md:px-32 text-gray-900 font-semibold ">
                    <h2 className="text-3xl font-semibold">Profile Info</h2>
                    <hr className="bg-black" />
                    <BiSolidUserCircle size="6em" color="gray" className="self-center" />
                    {/* <p>First Name: {userData && userData.firstName}</p>
                    <p>Last Name: {userData && userData.lastName}</p>
                    <p>Phone: {userData.phone}</p>
                    <p>Email: {userData.username}</p>
                    <p>Role: {"Member"}</p> */}
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
                <button className="card mt-4 bg-gray-300 self-center py-2 font-bold text-gray-700 px-4 rounded-md">Edit</button>
            </div>
        </div>
    )
}

export default AdminDashboard