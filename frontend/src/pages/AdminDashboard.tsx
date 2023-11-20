import { useContext, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify"
import DashboardMenu from "../components/DashboardMenu";
import Tithes from "./Tithes";
import Profile from "./Profile";
import { TypeAnimation } from "react-type-animation";
import EditProfile from "./Settings";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "../MyContext";
import MemberManagement from "./MemberManagement";

const AdminDashboard = ({ isLoggedIn }: any) => {

    console.log("IS Logged State: ", isLoggedIn);


    const [currentPage, setCurrentPage] = useState("Profile")

    const [username, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")


    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        phone: 0,
    })

    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        console.log("Access token", accessToken)

        // fetch("http://localhost:3000/user/profile", {
        // fetch("https://ffcm.zeabur.app/user/profile", {
        fetch("https://eager-dog-onesies.cyclic.app/user/profile", {
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
                console.log("Data: ", data)
                setUserData(data)
                setUsername(data.username)
                setFirstName(data.firstName)
                setLastName(data.lastName)
                // toast("Welcome back, ", data.first)
            }
        })
    }, [])

    return (
        <div className="admin-dashboard flex flex-col bg-white bg-no-repeat bg-cover min-h-screen">
            <div className="min-h-screen flex flex-col md:items-center">
                <DashboardMenu handlePage={setCurrentPage} />
                {
                    firstName && (
                        <p className="text-md font-bold absolute top-[70px] left-7
                        md:top-[100px] text-gray-600">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    // '- Welcome  ${firstName && firstName}',
                                    // "Welcome back, " + firstName,
                                    400, // wait 1s before replacing "Mice" with "Hamsters"

                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                                style={{ fontSize: '1em', display: 'inline-block', fontStyle: "italic" }}
                                cursor={false}
                            />

                            {/* Welcome back, {firstName && firstName} */}
                        </p>
                    )
                }

                {
                    currentPage === "Profile" ? <Profile userData={userData} /> :
                        currentPage === "Tithes" ? <div>
                            <Tithes />
                            <Tithes />
                            <Tithes />
                            <Tithes />
                        </div> :
                            currentPage === "Entries" ? <h2 className="mt-[200px]">Entries</h2> :
                                currentPage === "Settings" ? <EditProfile /> :
                                    currentPage === "Management" ? <MemberManagement /> : "Hello"
                }
            </div>
        </div>
    )
}

export default AdminDashboard