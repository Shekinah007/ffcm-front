import './App.css'
import { useState } from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Outlet, Route, Routes, useLoaderData } from "react-router-dom"
import { ToastContainer, Flip, Slide, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { Home } from '@mui/icons-material'
import Home from './pages/Home.tsx'
import { MyContext } from './MyContext'
import { HashRouter as Router, Link } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Register from './components/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import Leadership from './pages/Leadership.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <Router>
      <div className="bg-black">
        <ToastContainer autoClose={1500} transition={Slide} />
        <Navbar
          isSignedIn={isLoggedIn}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div onScroll={() => { alert("Scrolling") }} className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={
              <SignIn
                setCurrentPage={setCurrentPage}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/adminDashboard/*"
              element={
                <AdminDashboard
                  isLoggedIn={isLoggedIn}
                  setMainCurrentPage={setCurrentPage}
                  setIsLoggedIn={setIsLoggedIn}
                />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
