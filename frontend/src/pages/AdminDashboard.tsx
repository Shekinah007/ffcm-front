import { useContext, useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify"
import DashboardMenu from "../components/DashboardMenu";
import Tithes from "./Tithes";
import Profile from "./Profile";
import { TypeAnimation } from "react-type-animation";
import EditProfile from "./Settings";
import { Route, Routes, useOutletContext } from "react-router-dom";
import { MyContext } from "../MyContext";
import MemberManagement from "./MemberManagement";
import MemberProfile from "../components/MemberProfile";
import Logout from "../components/Logout";

import image404 from "../assets/illustrations/401 Error Unauthorized-pana (1).png"
import { Announcement } from "@mui/icons-material";
import Announcements from "./Announcements";
import BulletinDetails from "./BulletinDetails";

const AdminDashboard = ({ isLoggedIn, setIsLoggedIn, setMainCurrentPage }: any) => {

    console.log("IS Logged State: ", isLoggedIn);

    if (!isLoggedIn) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-white">
                <img
                    alt="unauthorized" src={image404}
                    className="h-[300px]"
                />
                <p className="text-3xl italic">Unauthorized!</p>
                <a
                    href="https://storyset.com/internet"
                    className="absolute bottom-0 right-0 text-gray-500 text-sm"
                >
                    Internet illustrations by Storyset
                </a>
            </div>
        )
    }

    const [currentPage, setCurrentPage] = useState("Profile")
    const [editProfile, setEditProfile] = useState(false)

    const [username, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [logoutModal, setLogoutModal] = useState(false)

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        phone: 0,
        role: "",
        imgUrl: "",
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
                // toast("Error")
                return ""
            }
        }).then(data => {
            if (data) {
                console.log("Data: ", data)
                setUserData(data)
                setUsername(data.username)
                setFirstName(data.firstName)
                setLastName(data.lastName)
            }
        })
    }, [editProfile])


    return (
        <div className="admin-dashboard relative flex flex-col bg-white bg-bg6 bg-no-repeat bg-cover  justify-center min-h-screen md:h-screen">
            <div className="min-h-screen flex flex-col   md:flex-row md:items-center">
                <DashboardMenu
                    handlePage={setCurrentPage}
                    currentPage={currentPage}
                    setLogoutModal={setLogoutModal}
                    userData={userData}
                />
                {logoutModal &&
                    <Logout
                        setIsLoggedIn={setIsLoggedIn}
                        setMainCurrentPage={setMainCurrentPage}
                        setLogoutModal={setLogoutModal}
                    />
                }
                <Routes>
                    <Route path="/" element={<Profile userData={userData} />} />
                    <Route path="/tithes/" element={<Tithes userData={userData} />} />
                    <Route path="/settings"
                        element={<EditProfile userData={userData} setEditProfile={setEditProfile} />}
                    />
                    <Route path="/members" element={<MemberManagement />} />
                    <Route path="/memberProfile/:username" element={<MemberProfile />} />
                    <Route path="/announcements" element={<Announcements />} />
                    <Route path="/bulletinDetails" element={<BulletinDetails userData={userData} />} />
                </Routes>
                {
                    firstName && (
                        <p className="text-md text-sm font-bold absolute top-[75px] right-5
                        md:top-[70px] md:right-10 text-gray-600">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    // '- Welcome  ${firstName && firstName}',
                                    "Welcome back, " + firstName + "_",
                                    400, // wait 1s before replacing "Mice" with "Hamsters"

                                ]}
                                wrapper="span"
                                speed={20}
                                repeat={Infinity}
                                style={{ fontSize: '1em', display: 'inline-block', fontStyle: "italic" }}
                                cursor={false}
                            />
                        </p>
                    )
                }


                <a href="https://www.freepik.com/free-vector/abstract-desktop-background-white-geometric-design-vector_18705217.htm#from_view=detail_alsolike"
                    className="absolute bottom-0 right-0 text-sm text-gray-600/40 font-semibold"
                >
                    Image by rawpixel.com on Freepik
                </a>


            </div>
        </div >
    )
}

// <a href="https://www.freepik.com/free-vector/paper-style-layers-background_7080891.htm#query=minimalist%20background&position=37&from_view=keyword&track=ais&uuid=e19ef547-fe91-448e-9e39-ab2d81a4a803"
//     className="absolute bottom-0 right-0 text-sm text-gray-600 font-semibold"
// >
//     Image by pikisuperstar
//     on Freepik
// </a>

export default AdminDashboard