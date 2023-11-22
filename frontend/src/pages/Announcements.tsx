


export const Message = ({ title, body }: any) => {
    return (
        <div className="card p-3 rounded-md flex flex-col gap-2">
            <h2 className="text-yellow-600 text-lg font-semibold">{title && title}:</h2>
            <hr className="bg-black" />
            <p>{body && body}</p>
            <button className="self-end rounded-md p-2 text-yellow-600 font-semibold">Details {">>"}</button>
        </div>
    )
}

const Announcements = () => {
    return (
        <div className="entrance min-h-screen md:h-screen pt-[100px] pb-[50px] text-gray-500 overflow-y-scroll px-6 ">
            <h1 className="font-semibold text-2xl">Announcements</h1>
            <hr className="" />
            <div className="py-3 flex flex-col gap-5">
                <Message
                    title="New Product Launch"
                    body="We are thrilled to introduce our
                    latest product, InnovateX. This cutting-edge solution
                    is designed to revolutionize the industry and provide our customers
                    with unmatched value. Stay tuned for more details on how InnovateX will
                    reshape our business landscape."
                />
                <Message
                    title="Expansion Plans: "
                    body="As part of our growth strategy, we are
                pleased to inform you that we will be opening two new branched in strategic locations.
                This expansion will enable us to better serve our customers and tap into new markets.
                We appreciate your dedication and commitment as we embark on this exciting journey."
                />
                <Message
                    title="Expansion Plans: "
                    body="As part of our growth strategy, we are
                pleased to inform you that we will be opening two new branched in strategic locations.
                This expansion will enable us to better serve our customers and tap into new markets.
                We appreciate your dedication and commitment as we embark on this exciting journey."
                />

                <Message
                    title="Training and Development Opportunities"
                    body="To foster continous growth and learning, we will be offering a 
                    range of training and development programs in the coming month. These opportunities
                    will enhance your skills, broaden your knowlwdge, and empower you to excel in your 
                    roles. Stay tuned for more information."
                />

            </div>
        </div >
    )
}

export default Announcements