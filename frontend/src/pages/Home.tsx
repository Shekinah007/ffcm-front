import logo1 from "../assets/images/ffcmLogo.png"
import { TypeAnimation } from 'react-type-animation';
import worshipImg from "../assets/images/pexels-luis-quintero-2014775.jpg"
import About from "./About"

const Home = () => {

    // function textAnimations() {

    //     let verses: Array<object> = [
    //         {
    //             text: "We walk by faith and not by sight",
    //             ref: "2 Corinthians 5:7"
    //         },
    //         {
    //             text: "Let all that you do be done in love",
    //             ref: "1 Corinthians 3:14"
    //         },
    //         {
    //             text: "So now faith, hope, and love abide, these three; but the greatest is these is love.",
    //             ref: "1 Corinthians 13:13"
    //         },
    //         {
    //             text: "If you love me, you will keep my commandments",
    //             ref: "John 14:15"
    //         },
    //         {
    //             text: "Anyone who does not love does not know God, because God is love",
    //             ref: "1 John 4:18"
    //         }
    //     ]

    //     for (let i = 0; i < verses.length; i++) {
    //         if (i == verses.length - 1) {
    //             i = 0;
    //         }
    //         console.log("Hello")
    //     }

    // }
    return (
        <div id="" className="home-page">
            {/* {() => textAnimations()} */}
            <div className="overlay h-screen w-screen absolute top-0 bg-black opacity-40"></div>
            <div>
                <div id="home" className="bg-bg1 md:bg-bg2 flex flex-col gap-4 bg-cover h-screen w-screen text-lg md:text-xl text-gray-300 justify-center items-center">
                    <img alt="logo" className="h-36 z-10 duration-200 custom-rotate " src={logo1} />
                    <div className="flex flex-col z-10 items-center text-center mx-3 h-3">
                        {/* <p className="italic text-gray-300 text-base">- We Walk By Faith And Not By Sight -</p> */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                '- We walk by faith and not by sight -',
                                400, // wait 1s before replacing "Mice" with "Hamsters"
                                ' So faith comes from hearing, and hearing through the word of Christ',
                                400,
                                'For nothing will be impossible with God',
                                400,

                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '1em', display: 'inline-block', fontStyle: "italic" }}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </div>

                </div>
                {/* <div id="about className="about flex gap-3 flex-col md:flex-row flex-wrap ">
                    <h2 className="text-lg text-gray-600 text-center">Welcome to Flaming Faith Covenant Minsitries</h2>
                    <hr ></hr>
                    <p>We are a church with the ultimate aim of showing people the love of God and changing their
                        lives through the power of His Word. We are a church that preaches the word of God as it is,
                        neither adding to it or taking away from it, for we believe that in the unchanged Word of God, lies
                        its power to change and save anyone who believes.
                    </p>
                </div> */}
                <About />

                <div className="worship-time flex flex-col-reverse md:flex-row justify-center items-center md:justify-between w-screen ">
                    <div className="px-10 py-20 md:py-5 flex flex-col gap-5  w-full md:w-1/2">
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
            </div>
        </div>
    )
}

export default Home