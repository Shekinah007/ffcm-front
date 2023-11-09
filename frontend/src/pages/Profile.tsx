import { AccountCircle, Settings } from '@mui/icons-material'

const Profile = ({ userData }: any) => {
    return (
        <div className="animate-rec  pt-16 flex flex-col p-2 ">
            <div className="flex flex-col gap-2 mt-10 px-5 md:px-32 text-gray-900 font-semibold ">
                <AccountCircle sx={{ fontSize: 100 }} className="self-center text-yellow-500" />
                <h2 className="text-2xl font-semibold">Profile Info</h2>
                <hr className="bg-black mb-4" />
                <table className="card text-gray-700 md:w-[500px] self-center" >
                    <tr>
                        <td>First Name</td>
                        <td>{userData && userData.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{userData && userData.lastName}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>{userData && userData.phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{userData && userData.username}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{userData && "Admin"}</td>
                    </tr>

                </table>
                <hr className="bg-black mt-4" />
            </div>
            <button className="card mt-4 text-xl bg-gray-300 flex items-center gap-1 self-center py-2 font-bold text-gray-700 px-4 rounded-md">
                <Settings />
                <p>Edit</p>
            </button>
        </div>
    )
}

export default Profile