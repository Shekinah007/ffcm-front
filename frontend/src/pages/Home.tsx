import bgImg from "../assets/images/pexels-george-webster-213207.jpg"
import logo1 from "../assets/images/ffcmLogo.png"

const Home = () => {
    return (
        <div>
            <div className="overlay h-screen w-screen fixed top-0 bg-black opacity-40 "></div>
            <div>
                <div className="bg-bg1 flex flex-col gap-4 bg-cover h-screen text-lg md:text-xl text-gray-300 justify-center items-center">
                    <img alt="logo" className="h-36 z-10" src={logo1} />
                    <div className="flex flex-col z-10 items-center">
                        <p className="italic text-gray-300 text-base">- We Walk By Faith And Not By Sight -</p>
                    </div>
                </div>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default Home