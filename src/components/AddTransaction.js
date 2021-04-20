import React,{useState} from 'react'

function AddTransaction() {
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)

    return (
        <div>
            <h3>Add Expense</h3>
            <form id="form">
                <div>
                <label htmlFor="text">Text</label>
                <input type="text" id="text" 
                    placeholder="Enter Text" 
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                />
                </div>
                <div>
                    <label htmlFor="amount">Amount<br/> (Negative - Expense)(Positive - Income)</label>
                    <input type="number" 
                    id="amount" 
                    value={amount}
                    onChange={(e)=>{setAmount(e.target.value)}}
                    />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
