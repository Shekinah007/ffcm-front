import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify"

const AdminDashboard = () => {

    const [username, setUsername] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
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
                setUsername(data.username)
                setFirstName(data.firstName)
                setLastName(data.lastName)


            }
        })
    }, [])


    return (
        <div className="admin-dashboard flex flex-col ">
            <Navbar />
            <div className="pt-20 flex flex-col bg-gray-200 p-2">
                <p className="text-xl font-bold absolute top-12 md:top-0 md:relative">Welcome {firstName && firstName}</p>
                <div className="text-black text-2xl text-center">
                    <p>{firstName && firstName} {lastName && lastName}</p>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard