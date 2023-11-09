import { Note, NoteAdd } from "@mui/icons-material"
import { useState } from "react"

const Tithes = () => {

    const [MonthRecord, setMonthRecord] = useState([])
    const [total, setTotal] = useState(0);

    return (
        <div className="flex flex-col gap-2 mt-32 mb-10 px-5 md:px-32 text-gray-900 font-semibold">
            <NoteAdd sx={{ fontSize: 100 }} className="self-center text-yellow-500" />
            <h2 className="text-2xl font-semibold">Pay Records for User Agilie Mani</h2>
            <hr className="bg-black mb-4" />
            <table className="card text-gray-700 md:w-[500px] self-center" >
                <tr>
                    <td className="font-bold text-xl bg-blue-300">Date</td>
                    <td className="font-bold text-xl bg-blue-300">Amount</td>
                </tr>
                <tr>
                    <td>1/04/02</td>
                    <td>2300</td>
                </tr>
                <tr>
                    <td>21/11/12</td>
                    <td>4000</td>
                </tr>
                <tr>
                    <td>13/07/24</td>
                    <td>5629</td>
                </tr>
                <tr>
                    <td>31/23/02</td>
                    <td>9741</td>
                </tr>
                <tr>
                    <td>25/02/4</td>
                    <td>12050</td>
                </tr>
                <tr>
                    <td className="font-bold text-xl">Total</td>
                    <td className="font-extrabold text-green-700">12004</td>
                </tr>
            </table>
        </div>
    )
}

export default Tithes