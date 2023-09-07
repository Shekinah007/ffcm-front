import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-4xl text-red-400">Oops!</h1>
      <p className="">Sorry, an unexpected error has occured.</p>
      <p className="italic text-gray-400 font-bold"> 404 - Page Not Found</p>
      <button onClick={() => { navigate("/") }} className="bg-yellow-400 rounded-md p-2">Return to Home Page</button>
    </div>
  )
}

export default NotFoundPage
