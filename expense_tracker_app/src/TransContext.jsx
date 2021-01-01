import React, { createContext, useReducer } from 'react'
import TransactionReducer from './TransReducer'


const initialTransactions= [
    {amount : 500 , des: "cash"},
    {amount : -20 , des: "Cold Drink"},
    {amount : 100 , des: "card"},
    {amount : -40 , des: "boook"},
]

export  const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({children}) => {
    let [state,dispatch] = useReducer(TransactionReducer, initialTransactions)

    function addTransaction (transObj){
        dispatch({
             type:"ADD_TRANSACTION ",
             patload: {
                amount : transObj.amount, 
                des: transObj.des
            }
        })
    }
    return (
        <TransactionContext.Provider value ={{ 
                transactions : state, 
                addTransaction 

        }}>  
        {children}
            </TransactionContext.Provider>
    )



} 
