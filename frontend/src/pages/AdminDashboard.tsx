import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify"
// import { BiSolidUserCircle } from "react-icons/Bi"
import DashboardMenu from "../components/DashboardMenu";
import Tithes from "./Tithes";
import Profile from "./Profile";

const AdminDashboard = () => {

    const [currentPage, setCurrentPage] = useState("Profile")

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

    // console.log("CurrentPage: ", currentPage)


    return (
        <div className="admin-dashboard flex flex-col bg-no-repeat bg-cover min-h-screen">
            <Navbar />
            <DashboardMenu handlePage={setCurrentPage} />
            <p className="text-md font-bold absolute top-[70px] ml-5 md:top-0 md:relative text-gray-600">Welcome back, {firstName && firstName}</p>
            {/* <Profile userData={userData} /> */}
            {
                currentPage === "Profile" ? <Profile userData={userData} /> :
                    currentPage === "Tithes" ? <Tithes /> :
                        currentPage === "Entries" ? <h2 className="mt-[200px]">Entries</h2> :
                            currentPage === "Settings" ? <h2 className="mt-[200px]">Settings</h2> : "Hello"
            }
            {/* <Tithes /> */}
        </div>
    )
}

export default AdminDashboard