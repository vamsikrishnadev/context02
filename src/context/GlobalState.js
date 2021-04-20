import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const init_state={
    transactions:[
        {id:1,text:'expense 1', amount:-20},
        {id:2,text:'expense 2', amount:-40},
        {id:3,text:'expense 3', amount:-2},
        {id:4,text:'income 1', amount:200},
        {id:5,text:'income 2', amount:80}
    ]
}

export const GlobalContext=createContext(init_state)

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,init_state)

    function deleteExpense(id){
        
        dispatch({
            type:"DELETE",
            payload:id
        })
        
    }
    return <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteExpense
    }

    }>
        {children}
    </GlobalContext.Provider>
}