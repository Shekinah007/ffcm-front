
const Logout = () => {
    return (
        <div className="animate-rec h-screen w-screen bg-blue-100 flex flex-col gap-10 items-center justify-center">
            <p className="font-semibold text-xl text-center w-3/4">Are you sure you want to log out?</p>
            <div className="flex flex-row gap-4">
                <button className="text-xl rounded-md p-2  text-gray-600 font-semibold bg-red-300">Log Out</button>
                <button className="text-xl rounded-md p-2  text-gray-600 font-semibold bg-yellow-200">Cancel</button>
            </div>
        </div>
    )
}

export default Logout