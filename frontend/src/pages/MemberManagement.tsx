import { AccountCircle } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


export const UserComponent = ({ name, username }: any) => {
    return (
        <Link to={`/adminDashboard/memberProfile/${username}`} className="animate-rec card border-solid border-b-2 border-gray-300 w-full flex items-center gap-2 text-yellow-600 rounded-md py-2  px-2 text-lg md:text-xl font-semibold text-left">
            <AccountCircle />
            <p className="text-gray-600">{name}</p>
        </Link>
    )
}

const MemberManagement = ({ setPage }: any) => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch("https://eager-dog-onesies.cyclic.app/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            if (res.ok) {
                // toast("Success")
                return res.json()
            } else {
                toast("Error")
                return ""
            }
        }).then((data): any => {
            if (data) {
                console.log("Data: ", data)
                setMembers(data)
            }
        })

    }, [])

    return (
        <div className="entrance pt-24 md:pt-20 px-5 md:px-16 w-full  min-h-screen md:h-screen md:overflow-y-scroll">
            <h1 className="font-semibold text-2xl md:text-xl mb-2 text-gray-600 px-2">User Management</h1>
            <h2 className="md:text-xl text-xl font-semibold text-gray-600 mb-2 px-2">All Users</h2>
            <hr className="bg-black" />
            <div className="py-4 flex w-full items-center flex-col gap-4 md:h-max md:gap-5 md:px-10 ">
                {
                    members.map((member: any) => <UserComponent name={member.firstName + " " + member.lastName} username={member.username} />)
                }
            </div>
        </div>
    )
}

export default MemberManagement