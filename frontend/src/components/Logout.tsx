
const Logout = () => {
    return (
        <div className="animate-rec h-screen w-screen flex flex-col gap-10 items-center justify-center bg-bg6 bg-cover ">
            <p className="font-semibold text-xl text-center w-3/4">Are you sure you want to log out?</p>
            <div className="flex flex-row gap-4">
                <button className="card text-xl rounded-md p-2  text-gray-600 font-semibold bg-red-100">Log Out</button>
                <button className="card text-xl rounded-md p-2  text-gray-600 font-semibold bg-yellow-100">Cancel</button>
            </div>
        </div>
    )
}

export default Logout