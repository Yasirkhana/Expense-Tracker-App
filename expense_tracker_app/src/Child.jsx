import React, { useContext, useState } from 'react'
import {TransactionContext} from './TransContext'


function Child(){    

    let {transactions,addTransaction} = useContext(TransactionContext) ;
    let [newDesc, setDesc] = useState('') ;     
    let [newAmount, setAmount] = useState(0) ;     


  
    const handleAddition = (event) => {
         event.preventDefault();    
         addTransaction({
             amount :Number(newAmount),
             desc : newDesc
         })
    }   
    const getIncome = () => {
        let income = 0 ;
        for (var i=0 ; i < transactions.length ; i++){
            if(transactions[i].amount > 0)
            income += transactions[i].amount
        }
        return income;
    }
    
    const getExpense = () => {
        let expense = 0 ;
        for (var i=0 ; i < transactions.length ; i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount 
        }
        return expense;
    }
    

  return(
    <>
    <div className = 'container'>
        <h1 className = "textCenter"> EXPENSE TRAKER </h1>
        <h3>Your Balance <br/> { getIncome() + getExpense()}  </h3> 

        <div className = "expenseContainer">
            <h3>INCOME <br/>{ getIncome()} </h3>
            <h3>EXPENSE  <br/>{ getExpense()} </h3>
        </div>
        <h3>HISTORY</h3>
        <hr/>
        <ul className = "transactionList">
            {transactions.map((transObj,ind)=>{
                return(
                <li key={ind}>
                <span> {transObj.des}</span>
                <span> {transObj.amount}</span>
            </li>)
            })}

        </ul>

        <h3>Add new Transaction</h3>
        <hr/>

        <form className = 'transactionForm' onSubmit = {handleAddition}>
            <label>
                Enter Discription <br/>
                <input type = "text" onChange= {(ev)=>setDesc(ev.target.value)} required />  
            </label>
            <label><br/>
                Enter Amount <br/>
                <input type = "number" onChange= {(ev)=>setAmount(ev.target.value)} required/> 
            </label><br/>
            <input type = "submit" value = "Add transaction"/>
        </form>
    </div>
    </>
  )
}

export default Child;