import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


export const UserComponent = ({ name }: any) => {
    return (
        <Link to={"/"} className="card rounded-md p-2 px-4 text-lg md:text-xl font-semibold bg-white text-left">
            <p>{name}</p>
        </Link>
    )
}


const MemberManagement = () => {
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
        <div className="mt-20 md:mt-28 px-3 w-full md:px-20">
            <h1 className="font-semibold text-xl md:text-3xl mb-4 text-gray-600">User Management</h1>
            <h2 className="md:text-2xl text-gray-600">All Users</h2>
            <hr className="bg-black" />
            <div className="py-4 px-3 flex flex-col gap-4 md:gap-5">
                {
                    members.map((member: any) => <UserComponent name={member.firstName + " " + member.lastName} id={member._id} />)
                }
            </div>
        </div>
    )
}

export default MemberManagement