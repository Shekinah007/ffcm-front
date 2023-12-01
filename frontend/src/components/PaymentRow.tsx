import React from 'react'

const PaymentRow = ({ editMode, amount, paymentMethod, date, id }: any) => {
    return (
        <tr className="">
            {/* <td>01-04-24</td> */}
            <td>
                <label htmlFor="date"></label>
                <input type="date" id="date" className="w-[110px]" />
            </td>
            <td>{paymentMethod}</td>
            <td>
                {
                    editMode ? <input placeholder="Amount" className="text-center w-[100px] " />
                        : amount
                }
            </td>
        </tr>
    )
}

export default PaymentRow