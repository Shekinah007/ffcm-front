import logo1 from "../assets/images/ffcmLogo.png"

const Home = () => {
    return (
        <div className="">
            <div className="overlay h-screen w-screen absolute top-0 bg-black opacity-40"></div>
            <div>
                <div className="bg-bg1 md:bg-bg2 flex flex-col gap-4 bg-cover h-screen w-screen text-lg md:text-xl text-gray-300 justify-center items-center">
                    {/* <div className="bg-bg1 md:bg-bg2"> */}
                    <img alt="logo" className="h-36 z-10" src={logo1} />
                    <div className="flex flex-col z-10 items-center">
                        <p className="italic text-gray-300 text-base">- We Walk By Faith And Not By Sight -</p>
                    </div>
                </div>
                {/* <div id="about" className="about flex gap-3 flex-col md:flex-row flex-wrap ">
                    <h2 className="text-lg text-gray-600 text-center">Welcome to Flaming Faith Covenant Minsitries</h2>
                    <hr ></hr>
                    <p>We are a church with the ultimate aim of showing people the love of God and changing their
                        lives through the power of His Word. We are a church that preaches the word of God as it is,
                        neither adding to it or taking away from it, for we believe that in the unchanged Word of God, lies
                        its power to change and save anyone who believes.
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Home