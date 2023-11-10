
const EditProfile = () => {
    return (
        <div className="animate-rec bg-white card p-3 mt-10 pt-10 rounded-lg w-screen flex flex-col items-center justify-center self-center">
            <h2 className="font-semibold text-2xl mb-2 self-start ml-9">Edit Profile</h2>
            <hr className="bg-black w-[300px] mb-4" />
            <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="firstName">First Name</label>
                        <input className="rounded-md p-2 w-[300px] bg-gray-200" id="firstName" type="text"></input>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="lastName">Last Name</label>
                        <input className="rounded-md p-2 w-[300px] bg-gray-200" id="lastName" type="text"></input>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="email">Email</label>
                        <input className="rounded-md p-2 w-[300px] bg-gray-200" id="email" type="email"></input>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-gray-500" htmlFor="phone">Phone Number</label>
                        <input className="rounded-md p-2 w-[300px] bg-gray-200" id="phone" type="phone"></input>
                    </div>
                    <hr className="bg-black w-[300px] mb-2 mt-2" />
                    <button className="p-2 bg-blue-600 self-center justify-self-center font-semibold text-white text-lg rounded-md">
                        Save Changes
                    </button>
                </form>
            </div>
        </div >
    )
}

export default EditProfile