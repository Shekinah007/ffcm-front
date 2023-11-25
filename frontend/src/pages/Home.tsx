import logo1 from "../assets/images/ffcmLogo.png"
import { TypeAnimation } from 'react-type-animation';
import worshipImg from "../assets/images/pexels-luis-quintero-2014775.jpg"
import About from "./About"
import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import { useOutletContext } from "react-router-dom";
import Leadership from "./Leadership";

const Home = () => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

    useEffect(() => {
        let classes = document.querySelectorAll(".animate")

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("INTERSECTING")
                    setIsIntersecting(true)
                }
                else {
                    console.log("Not Intersecting")
                    setIsIntersecting(false)
                }
            })
        }, { rootMargin: "" })

        for (let i = 0; i < classes.length; i++) {
            const elements = classes[i];

            observer.observe(elements);
        }

    }, [])



    let verses = [
        {
            text: "We walk by faith and not by sight",
            ref: "2 Corinthians 5:7"
        },
        {
            text: "Let all that you do be done in love",
            ref: "1 Corinthians 3:14"
        },
        {
            text: "So now faith, hope, and love abide, these three; but the greatest is these is love.",
            ref: "1 Corinthians 13:13"
        },
        {
            text: "If you love me, you will keep my commandments",
            ref: "John 14:15"
        },
        {
            text: "Anyone who does not love does not know God, because God is love",
            ref: "1 John 4:18"
        }
    ]

    const [currentVerse, setCurrentVerse] = useState(verses[0])

    useEffect(() => {
        let i = 0;
        setInterval(() => {
            if (i == verses.length - 1) {
                i = 0;
            }
            // console.log(verses[i])
            setCurrentVerse(verses[i])
            i++;
        }, 4000);
    }, [])



    return (
        <div id="" className="home-page">
            <div className="overlay h-screen w-screen absolute top-0 bg-black opacity-40"></div>
            <div className="bg-white">
                <div id="home" className="bg-bg1 md:bg-bg2 flex flex-col gap-4 bg-cover h-screen w-screen text-lg md:text-xl bg-black text-gray-300 justify-center items-center">
                    <img alt="logo" className="h-36 z-10 duration-200 custom-rotate " src={logo1} />
                    <div className={`flex flex-col z-10 items-center text-center mx-3 h-3`}>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                '- We walk by faith and not by sight -',
                                400, // wait 1s before replacing "Mice" with "Hamsters"
                                '- So faith comes from hearing, and hearing through the word of Christ -',
                                400,
                                '- For nothing will be impossible with God -',
                                400,

                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '1em', display: 'inline-block', fontStyle: "italic" }}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </div>
                </div>
                <About />
                <Leadership isIntersecting={isIntersecting} />

                <div className={`worship-time  flex flex-col-reverse md:flex-row justify-center items-center md:justify-between w-screen`}>
                    <div className={`animate  px-10  py-20 md:py-5 flex flex-col gap-5  w-full md:w-1/2 opacity-0 ${isIntersecting && " translate-y-0 opacity-100 enter"}`}>
                        <h2 className="text-2xl font-semibold font-serif">Worship Hours</h2>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="text-yellow-400 font-semibold text-lg">Sundays</h3>
                            <p className="text-gray-400">8:00AM - 10:30AM <span className="text-yellow-400 text-semibold">(HQ) </span></p>
                            <p className="text-gray-400">8:30AM - 11:00AM <span className="text-yellow-400 text-semibold">(OGIDA) </span></p>
                            <hr />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-yellow-400 font-semibold text-lg">Wednesdays @ HQ</h3>
                            <p className="text-gray-400">5:00PM - 6:30PM</p>
                            <hr />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-yellow-400 font-semibold text-lg">Tuesdays @ OGIDA </h3>
                            <p className="text-gray-400">5:00PM - 6:30PM</p>
                            <hr />
                        </div>
                    </div>
                    <img src={worshipImg} alt="" className="w-screen md:w-1/2 md:block" />
                </div>
                <Contact />
            </div>
        </div>
    )
}



export default Home