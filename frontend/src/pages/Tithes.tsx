import { Calculate, Note, NoteAdd } from "@mui/icons-material"
import { useState } from "react"

const Tithes = () => {

    const [monthRecord, setMonthRecord] = useState([2300, 4000, 5629, 9741])
    const [total, setTotal] = useState(0);
    const [editMode, setEditMode] = useState(false);

    class Month {
        constructor() {
            let days = [{ date: new Date(), }]
        }
    }



    let userPayRecord = [
        [
            {
                date: new Date(),
                amount: 2304
            },
            {
                date: new Date(),
                amount: 5382
            },
            {
                date: new Date(),
                amount: 10472
            },
            {
                date: new Date(),
                amount: 10472
            },
            {
                date: new Date(),
                amount: 10472
            },
        ]
    ]

    const calcMonthRecord = (): number => {
        let total = 0;
        for (let i = 0; i < monthRecord.length; i++) {
            total += monthRecord[i];
        }
        setTotal(total);
        return total;
    }

    return (
        <div className="animate-rec card rounded-md py-3 bg- md:w-full record flex flex-col gap-2 mt-20 mb-10 px-5 md:px-32 text-gray-900 font-semibold">
            <NoteAdd sx={{ fontSize: 50 }} className="self-center text-yellow-500" />
            <h2 className="text-xl font-semibold">Records for User Agilie Mani</h2>
            <hr className="bg-black mb-3" />
            <table className="card text-gray-700 md:w-[500px] self-center" >
                <tr className="font-bold text-xl bg-blue-100">
                    <td>Date(D/M/Y)</td>
                    <td>Amount(N)</td>
                </tr>
                <tr>
                    <td>01-04-02</td>
                    <td>
                        {
                            editMode ? <input placeholder="Amount" className="text-center w-[100px] " />
                                : 34500
                        }
                    </td>
                </tr>
                <tr>
                    <td>21-11-12</td>
                    <td>
                        {
                            editMode ? <input placeholder="Amount" className="text-center w-[100px] " />
                                : 34500
                        }
                    </td>
                </tr>
                <tr>
                    <td>13-07-24</td>
                    <td>
                        {
                            editMode ? <input placeholder="Amount" className="text-center w-[100px] " />
                                : 34500
                        }
                    </td>
                </tr>
                <tr>
                    <td>31-23-02</td>
                    <td>
                        {
                            editMode ? <input placeholder="Amount" className="text-center w-[100px] " />
                                : 34500
                        }
                    </td>
                </tr>
                <tr>
                    <td>25-02-04</td>
                    <td>
                        {
                            editMode ? <input placeholder="Amount" className="text-center w-[100px] " />
                                : 34500
                        }
                    </td>
                </tr>
                <tr className="bg-blue-100">
                    <td className="font-bold text-xl">Total</td>
                    <td className="font-extrabold text-green-700">{total}</td>
                </tr>
            </table>
            <hr className="bg-black mt-4" />
            <button
                onClick={() => { setEditMode(prev => !prev) }}
                className="card mt-4 text-xl bg-gray-300 flex items-center gap-1 self-center py-2 font-bold text-gray-700 px-4 rounded-md">
                <Calculate />
                <p>Edit</p>
            </button>
            <button
                onClick={() => calcMonthRecord()}
                className="card mt-4 text-xl bg-gray-300 flex items-center gap-1 self-center py-2 font-bold text-gray-700 px-4 rounded-md">
                <Calculate />
                <p>Calculate</p>
            </button>
        </div>
    )
}

export default Tithes