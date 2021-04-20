import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IncomeExpenses = () => {
    const {transactions}=useContext(GlobalContext)
    const amounts=transactions.map(transaction=>transaction.amount)
    const income=amounts.filter(amt=>amt>0).reduce((acc,item)=>acc+=item,0)
    const expense=amounts.filter(amt=>amt<0).reduce((acc,item)=>acc+=item,0)
    return (
        <div>
            <div>
                <h2>Income</h2>
                <h2 id='money-plus'>${income}</h2>
            </div>
            <div>
                <h2>Expense</h2>
                <h2 id='money-minus'>${expense}</h2>
            </div>
        </div>
    )
}

export default IncomeExpenses
