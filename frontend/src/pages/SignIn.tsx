import { Navigate, useNavigate } from "react-router-dom"





const SignIn = () => {

    let navigate = useNavigate()

    async function signInAdmin(e: any) {
        e.preventDefault();
        navigate("/adminDashboard")
    }

    return (
        <div className='sign-page pt-14 min-h-screen flex flex-col justify-center items-center bg-bg3 bg-cover bg-no-repeat'>
            <div>

            </div>
            <div className="rounded-lg bg-yellow-400/90 text-white h-[400px] w-[300px] flex flex-col items-center justify-center gap-3">
                <div className="">
                    <h2 className="font-semibold text-xl text-center">Admin Login</h2>
                    <hr className="w-[200px] mt-1 mb-5" />
                </div>
                <form className="signin flex flex-col gap-3">
                    <div>
                        <label htmlFor="username"></label>
                        <input id="username" type="string" required placeholder="Username" className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input id="email" type="email" required placeholder="Email" className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phone"></label>
                        <input id="phone" type="string" placeholder="Phone" className="p-2 text-black rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input id="password" type="password" required minLength={4} placeholder="Password" className="p-2 text-black rounded-md" />
                    </div>
                    <hr className="w-[200px] mt-5 " />
                    <button className="bg-white text-yellow-400 rounded-md font-semibold text-lg w-[150px] self-center py-1" onClick={(e) => { signInAdmin(e); }} >Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn