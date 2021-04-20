export default (state,action)=>{
    switch(action.type){
        case "DELETE":
            console.log(action.payload)
            return{
                ...state,
                transactions:state.transactions.filter(tran=>
                     tran.id!=action.payload)
            }
        default:
            return state
    }
}