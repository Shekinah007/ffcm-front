import bgImg from "../assets/images/pexels-george-webster-213207.jpg"
import logo1 from "../assets/images/ffcmLogo.png"

const Home = () => {
    return (
        <div>
            <div>
                <div className="bg-bg1 bg-cover h-screen flex justify-center items-center">
                    <img alt="logo" className="h-36" src={logo1} />
                </div>
            </div>
            <button onClick={(): void => { alert("Hello wordl") }}>Say Hello!</button>
        </div>
    )
}

export default Home