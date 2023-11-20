import { useState } from "react"
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import LoadingOverlay from "../components/LoadingOverlay";



const SignIn = ({ setCurrentPage, setIsLoggedIn, isLoggedIn }: any) => {

    window.scrollTo(0, 0)

    let navigate = useNavigate()

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [validationError, setValidationError] = useState<Boolean>(false)
    const [visibility, setVisibility] = useState(false);

    async function signInAdmin(e: any) {

        e.preventDefault();

        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        console.log("hehwke", username.match(emailReg))


        if (username.match(emailReg) == null) {
            toast.info('Enter a valid email address. E.g "justice@example.com"')
            setValidationError(true)
            return;
        }

        if (username == "" || password == "") {
            console.log("Hello")
            toast.info("None of the fields should be empty")
            setValidationError(true)
            return;
        }

        if (username.match(emailReg)) {
            const loginData = { username, password }

            setVisibility(true)

            // fetch("http://localhost:3000/auth/login/", {
            // fetch("https://ffcm.zeabur.app/auth/login/", {
            fetch("https://eager-dog-onesies.cyclic.app/auth/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            }).then(res => {
                if (res.ok) {
                    toast.success("Login Successfull", {
                        toastId: "login-success",
                    })
                    setIsLoggedIn(true) // set log in state
                    return res.json()
                } else {
                    toast.error("Login failed. Invalid email or password")
                    return ""
                }
            }).then(data => {
                if (!data) {
                    return ""
                }
                localStorage.setItem("username", data.username)
                localStorage.setItem("accessToken", data.accessToken)
                setVisibility(false)
                setIsLoggedIn(true) // set log in state
                setTimeout(() => {
                    setCurrentPage("Dashboard")
                    navigate("/adminDashboard");
                }, 1500)
            }).catch((error) => {
                setVisibility(false)
                console.log("Error: ", error)
            }).finally(() => { setVisibility(false) })

        }

        console.log("Submitted!!")
    }

    return (
        <div className='sign-page pt-14 min-h-screen flex flex-col justify-center items-center bg-bg3 bg-cover bg-no-repeat'>
            <LoadingOverlay visibility={visibility} />

            <div className={`rounded-lg bg-yellow-400/90 transition-all duration-1000 ${validationError && "bg-gray-700/80 border-8 border-gray-800 "}  text-white h-[400px] w-[300px] flex flex-col items-center justify-center gap-3`}>
                <div className="">
                    <h2 className="font-semibold text-xl text-center">Admin Login</h2>
                    <hr className="w-[200px] mt-1 mb-5" />
                </div>
                <form className="signin flex flex-col gap-3">
                    <div>
                        <label htmlFor="username"></label>
                        <input
                            value={username}
                            onChange={(e) => {
                                setValidationError(false)
                                setUsername(e.target.value)
                            }}
                            id="username" type="string" required placeholder="Email" className="p-2 text-black rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="password"></label>
                        <input
                            value={password}
                            onChange={(e) => {
                                setValidationError(false)
                                setPassword(e.target.value)
                            }}
                            id="password" type="password" required minLength={4} placeholder="Password" className="p-2 text-black rounded-md" />
                    </div>
                    <hr className="w-[200px] mt-5 " />
                    <button className="bg-white text-yellow-400 rounded-md font-semibold text-lg w-[150px] self-center py-1" onClick={(e) => { signInAdmin(e); }} >Login</button>
                </form>
                <p className="text-sm text-black">Don't have an account? Register <Link to={"/register"} className="text-blue-700">here</Link></p>
            </div>
        </div>
    )
}

export default SignIn