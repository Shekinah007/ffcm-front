import { useNavigate } from "react-router-dom"
import LogoutLogo from "../assets/illustrations/decision-monochromatic.png"
import LogoutLogo2 from "../assets/illustrations/decision-outline.png"






const Logout = ({ setIsLoggedIn }: any) => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("accessToken")
        setIsLoggedIn(false)
        navigate("/")
    }


    return (
        <div className="log-out entrance fixed left-0 top-0 card z-[1]">
            <div className="bg-black/50 top-0 left-0 h-screen w-screen absolute -z-[10]"></div>
            <div className="card flex flex-col gap-2 fixed-center p-4 bg-white z-[1000] w-screen md:w-[400px] rounded-lg items-center self-center justify-self-center justify-center bg-cover ">
                <img alt="logout logo" src={LogoutLogo2} className="h-32" />
                <p className="font-semibold text-lg text-gray-600 text-center w-3/4">Are you sure you want to log out?</p>
                <div className=" flex flex-row gap-4  text-white p-2 rounded-md">
                    <button className="card text-lg rounded-md p-2   bg-red-500">Cancel</button>
                    <button
                        className="card text-lg rounded-md p-2   bg-green-500"
                        onClick={logOut}
                    >Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Logout