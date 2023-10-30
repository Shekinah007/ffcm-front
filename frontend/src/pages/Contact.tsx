import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const Contact = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [visibility, setVisibility] = useState(false)

    const handleContactForm = (e: any) => {
        e.preventDefault()

        const contactData = {
            name: name,
            email: email,
            mobile: phone,
            message: message
        }

        fetch("https://ffcm.zeabur.app/question", {
            // fetch("http://localhost:3000/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData)
        }).then(res => {
            if (res.ok) {
                toast("Message sent successfully!!")
                setVisibility(true)
                return res.json()
            } else {
                toast("Sorry, an error occurred.")
                console.log(res)
                return ""
            }
        }).then((data) => {
            console.log(data)
            if (data) {
                console.log("Contact Data: ", data)
            }
        })
    }

    return (
        <div className={`
        contact-page py-10 min-h-[500px] flex flex-col gap-4 justify-center 
        items-center border border-y-yellow-400 w-full bg-gray-100  duration-500 transition-all
        ${visibility && "overflow-hidden h-0 min-h-0 py-[0]"}
        `}>
            <h2 className="text-5xl font-bold">Questions?</h2>
            <p className="text-center">Contact us. We would love to hear from you. <br />👇</p>
            <form
                onSubmit={handleContactForm}
                className="bg-gray-100 min-h-[200px] w flex flex-col gap-7 justify-center p-3 rounded-md w-[90%] md:w-[400px] py-5 card">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="pl-5 font-semibold text-md">Name <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-700"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="pl-5 font-semibold text-md">Email <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-700"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="pl-5 font-semibold text-md">Mobile Number <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-700"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="pl-5 font-semibold text-md">Message <span className="text-red-600 font-bold">*</span></label>
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