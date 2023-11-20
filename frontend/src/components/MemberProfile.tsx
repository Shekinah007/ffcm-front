const MemberProfile = () => {


    return (
        <div className="animate-rec mt-20 px-3">
            <h2 className="font-semibold text-2xl">Matthew Sunny Man</h2>
            <hr className=" bg-black" />
            <div className="flex flex-col gap-6 mt-5 px-5">
                <div>
                    <p className="font-semibold text-lg text-gray-500">Phone: </p>
                    <hr className=" bg-black" />
                    <p className="font-semibold text-xl text-right text-gray-700">0908227471</p>
                </div>
                <div>
                    <p className="font-semibold text-lg text-gray-500">Username/Email: </p>
                    <hr className=" bg-black" />
                    <p className="font-semibold text-xl text-right text-gray-700">lucas@gmail.com</p>
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
        </div>
    )
}

export default MemberProfile