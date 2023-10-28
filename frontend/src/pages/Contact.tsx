import { useState } from "react"

const Contact = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <div className="contact-page pt-12 min-h-[500px] flex flex-col  gap-4 justify-center items-center border border-y-yellow-400 w-full bg-white py-10">
            <h2 className="text-5xl font-bold">Questions?</h2>
            <p className="text-center">Contact us. We would love to hear from you. <br />👇</p>
            <form className="bg-white min-h-[200px] w flex flex-col gap-7 justify-center p-3 rounded-md w-[90%] md:w-[500px] py-5 card">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="pl-3 font-semibold text-xl">Name <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-700"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="pl-3 font-semibold text-xl">Email <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-700"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="pl-3 font-semibold text-xl">Mobile Number <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-700"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="pl-3 font-semibold text-xl">Message </label>
                    <textarea
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="w-[90%] px-2 self-center rounded-md h-[90px] border-[1px] border-gray-700"
                        placeholder="Type your message here..."
                    />
                </div>

                {/* <button className="bg-blue-400 text-black font-semibold p-2 rounded-lg">Submit</button> */}
                <button className="bg-black text-white font-semibold text-xl rounded w-[130px] h-[40px] self-end mr-4 ">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact