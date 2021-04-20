import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const {transactions}=useContext(GlobalContext)
    const amounts=transactions.map(transaction=>transaction.amount)
    const total=amounts.reduce((acc,item)=>acc+=item,0)
    

    return (
        <div>
            <h2>Your balance</h2>
            <h2 id="balance">${total}</h2>
        </div>
    )
}

export default Balance
