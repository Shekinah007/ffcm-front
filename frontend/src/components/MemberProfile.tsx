import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

const MemberProfile = () => {

    const { username } = useParams()
    console.log("Params: ", username)

    const [userData, setUserData] = useState<any>()

    useEffect(() => {
        fetch("https://eager-dog-onesies.cyclic.app/user/" + username, {
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
                setUserData(data)
            }
        })

    }, [])



    return (
        <div className="animate-rec mt-20 px-3">
            <h2 className="font-semibold text-2xl">{userData && userData.firstName + " " + userData.lastName}</h2>
            <hr className=" bg-black" />
            {
                userData &&
                <div className="flex flex-col gap-6 mt-5 px-5">
                    <div>
                        <p className="font-semibold text-lg text-gray-500">Phone: </p>
                        <hr className=" bg-black" />
                        <p className="font-semibold text-xl text-right text-gray-700">{userData.phone}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-500">Username/Email: </p>
                        <hr className=" bg-black" />
                        <p className="font-semibold text-xl text-right text-gray-700">{userData.username}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-500">Gender: </p>
                        <hr className=" bg-black" />
                        <p className="font-semibold text-xl text-right text-gray-700">Male</p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-500">Address: </p>
                        <hr className=" bg-black" />
                        <p className="font-semibold text-xl text-right text-gray-700">No Address</p>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-500">Relationship Status: </p>
                        <hr className=" bg-black" />
                        <p className="font-semibold text-xl text-right text-gray-700">Single</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default MemberProfile