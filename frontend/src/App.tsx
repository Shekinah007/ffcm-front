import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom"
import { ToastContainer, Flip, Slide, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="bg-black">
      <ToastContainer autoClose={1500} transition={Flip} />
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
