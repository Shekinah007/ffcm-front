import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");


    const handleRegister = (e: any) => {
        e.preventDefault()

        if (password === confirmPassword) {

            const userData = {
                firstName: firstName,
                lastName: lastName,
                username: email,
                phone: phone,
                password: password,
            }


            console.log(userData)
            fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log("Error, unable to complete fetch request");
                    return ""
                }
            }).then(data => {
                navigate("/signin")
                console.log("DATA", data)
            })
            console.log("Submitted!!")
        }
    }

    return (

        <div className='sign-page pt-14 min-h-screen flex flex-col justify-center items-center bg-bg3 bg-cover bg-no-repeat'>
            <div>

            </div>
            <div className="rounded-lg bg-yellow-400/90 text-white h-[450px] w-[300px] flex flex-col items-center justify-center gap-3">
                <div className="">
                    {/* <h2 className="font-semibold text-xl text-center">Register</h2> */}
                    {/* <hr className="w-[200px] mt-1 mb-5" /> */}
                </div>
                <form className="signin flex flex-col gap-3">
                    <div>
                        <label htmlFor="firstName"></label>
                        <input
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            id="firstName" type="string" required placeholder="First Name" className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="lastName"></label>
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            id="lastName" type="string" required placeholder="Last Name " className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email" type="email" required placeholder="Email" className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phone"></label>
                        <input
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            id="phone" type="string" placeholder="Phone No" className="p-2 text-black rounded-md" />
                    </div>
                    <hr className="w-[200px] mt-5 " />
                    <div>
                        <label htmlFor="password"></label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="password" type="password" required minLength={4} placeholder="Password" className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword"></label>
                        <input
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            id="confirmPassword" type="password" required minLength={4} placeholder="Confirm Password" className="p-2 text-black rounded-md" />
                    </div>
                    <hr className="w-[200px] mt-1 " />
                    <button className="bg-white text-yellow-400 rounded-md font-semibold text-lg w-[150px] self-center py-1" onClick={(e) => { handleRegister(e); }} >Register</button>
                    <p>Already have an account? <Link to={"/signin"}>Login</Link></p>
                </form>
            </div>

        </div>
    )
}

export default Register