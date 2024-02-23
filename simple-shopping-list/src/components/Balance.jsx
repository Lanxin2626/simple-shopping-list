import React,{useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const [balance, setBalance]=useState(0);

  useEffect(()=>{
    const amounts= transactions.map((transaction)=>transaction.amount);
    //console.log(amounts)
    const totalAmounts= amounts.reduce((acc,item)=>(acc+=item),0);
    setBalance(totalAmounts);
  
  },[transactions]);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balnace"> ${balance}</h1>
    </div>
  )
}


export default Balance
