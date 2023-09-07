
const Contact = () => {
    return (
        <div className="contact-page pt-12 min-h-[500px] flex justify-center items-center">
            <form className="bg-blue-300 min-h-[200px] flex flex-col gap-3 justify-center items-center p-3 rounded-md">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" required placeholder="Email" className="p-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="tel" required placeholder="Phone" className="p-1" />
                </div>
                <button className="bg-blue-400 text-black font-semibold p-2 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact