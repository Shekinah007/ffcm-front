import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    // const [gender, setGender] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");


    const handleRegister = (e: any) => {
        e.preventDefault()

        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/



        const userData = {
            firstName: firstName,
            lastName: lastName,
            username: email,
            phone: phone,
            password: password,
        }


        console.log(userData)

        if (!firstName || !lastName || !email || !password) {
            toast("All required fields must be filled in!")
            return
        }

        if (email.match(emailReg) == null) {
            toast('Your email address is not valid. E.g "justice@example.com"')
            return;
        }

        if (password.length < 6) {
            toast("Password must have at least 6 characters")
            return
        }

        if (password !== confirmPassword) {
            toast("Passwords do mot match!")
            return;
        }

        console.log("passed")


        // fetch("http://localhost:3000/auth/register", {
        // fetch("https://ffcm.zeabur.app/auth/register", {
        fetch("https://eager-dog-onesies.cyclic.app/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then(res => {
            if (res.ok) {
                toast("Registration successful")
                return res.json()
            } else {
                console.log("Error, unable to complete fetch request");
                return ""
            }
        }).then(data => {
            console.log("DATA", data)
            if (!data) {
                toast("Registration failed")
            }
            setTimeout(() => {
                navigate("/signin")
            }, 800)
        })
        console.log("Submitted!!")
    }

    return (

        <div className='sign-page pt-14 min-h-screen flex flex-col justify-center text-center items-center bg-bg3 bg-cover bg-no-repeat'>
            <div>
            </div>
            <div className="rounded-lg bg-yellow-400/90 text-white w-[85%] md:w-[400px] py-10 flex flex-col  justify-center gap-3">
                <div className="">
                    {/* <h2 className="font-semibold text-xl text-center">Register</h2> */}
                    {/* <hr className="w-[200px] mt-1 mb-5" /> */}
                </div>
                <form className="signin flex flex-col gap-3">
                    <div className="flex flex-col">
                        <label htmlFor="firstName"></label>
                        <input
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            id="firstName" type="string" required placeholder="First Name *"
                            className="p-2 text-black rounded-md w-[80%] self-center" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName"></label>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            id="lastName" type="string" required placeholder="Last Name *"
                            className="p-2 text-black rounded-md w-[80%] self-center" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email"></label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email" type="email" required placeholder="Email *"
                            className="p-2 text-black rounded-md w-[80%] self-center" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone"></label>
                        <input
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            id="phone" type="string" placeholder="Phone No"
                            className="p-2 text-black rounded-md w-[80%] self-center" />
                    </div>
                    <hr className="w-[200px] mt-5 self-center" />
                    <div className="flex flex-col">
                        <label htmlFor="password"></label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="password" type="password" required minLength={6} placeholder="Password *"
                            className="p-2 text-black rounded-md w-[80%] self-center" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword"></label>
                        <input
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            id="confirmPassword" type="password" required minLength={4} placeholder="Confirm Password *"
                            className="p-2 text-black rounded-md w-[80%] self-center" />
                    </div>
                    <hr className="w-[200px] mt-1 self-center" />
                    <button className="bg-white text-yellow-400 rounded-md font-semibold text-lg w-[150px] self-center py-1" onClick={(e) => { handleRegister(e); }} >Register</button>
                    <p>Already have an account? <Link to={"/signin"} className="text-blue-700">Login</Link></p>
                </form>
            </div>

        </div>
    )
}

export default Register