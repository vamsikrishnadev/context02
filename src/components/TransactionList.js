import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const TransactionList = () => {
    const {transactions,deleteExpense}=useContext(GlobalContext)
   const deleteExp=(e)=>{

deleteExpense(e.target.id)
   }
    return (
        <div>
            <h3>History</h3>
            <ul>
                {
                    transactions.map(tran=>(
                        <li key={tran.id} >
                            <h4>{tran.text}</h4><span>{tran.amount}</span><button id={tran.id} onClick={deleteExp}>delete</button>
                        </li>
                    ))
                }
               
            </ul>
        </div>
    )
}

export default TransactionList
