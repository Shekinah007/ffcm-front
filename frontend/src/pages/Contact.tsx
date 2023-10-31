import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { toast } from "react-toastify"

const Contact = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [visibility, setVisibility] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)


    const handleContactForm = (e: any) => {
        e.preventDefault()
        const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!name || !email || !phone || !message) {
            toast.info("Please fill in all the available fields.")
            return;
        }

        if (email.match(emailReg) == null) {
            toast.info("Your email address in not valid. E.g 'justice@gmail.com'");
            return
        }

        if (phone.length < 10) {
            toast.info("Please enter a valid phone number")
            return;
        }

        if (isNaN(+phone)) {
            toast.info("Please enter a valid phone number")
            return;
        }

        const contactData = {
            name: name,
            email: email,
            mobile: phone,
            message: message
        }
        setShowSpinner(true)
        fetch("https://eager-dog-onesies.cyclic.app/question", {
            // fetch("http://localhost:3000/question", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData)
        }).then(res => {
            if (res.ok) {
                toast.success("Message sent!")
                setVisibility(true)
                return res.json()
            } else {
                toast.error("Sorry, an error occurred.")
                setShowSpinner(false)
                console.log(res)
                return ""
            }
        }).then((data) => {
            console.log(data)
            if (data) {
                console.log("Contact Data: ", data)
                setShowSpinner(false)

            }
        })
    }

    return (
        <div className={`
        contact-page py-[25px] flex flex-col gap-4 justify-center 
        items-center border border-y-yellow-400 w-full bg-gray-100 duration-500 transition-all
        ${visibility && "overflow-hidden py-[0px] h-0 scale-y-0"}
                `}>
            <div className={`w-full absolute bg-black/75 h-5/6 md:h-full z-20 text-black  ${showSpinner ? "scale-y-1 flex justify-center items-center" : "scale-y-0"}`}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
            <h2 className="text-3xl font-bold">Questions?</h2>
            <p className="text-center">Contact us. We would love to hear from you. <br />👇</p>
            <form
                onSubmit={handleContactForm}
                className="bg-gray-100 min-h-[200px] w flex flex-col gap-3 justify-center p-3 rounded-md w-[90%] md:w-[400px] py-5 card">

                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="pl-5 font-semibold text-md">Name <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-300"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="pl-5 font-semibold text-md">Email <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-300"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="pl-5 font-semibold text-md">Mobile Number <span className="text-red-600 font-bold">*</span></label>
                    <input
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className="w-[90%] px-2 self-center rounded-md h-[40px] border-[1px] border-gray-300"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="pl-5 font-semibold text-md">Message <span className="text-red-600 font-bold">*</span></label>
                    <textarea
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="w-[90%] px-2 self-center rounded-md h-[90px] border-[1px] border-gray-300"
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