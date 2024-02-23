import React,{useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionItem = ({transaction}) => {
  const sign=transaction.amount<0? '-':'+';
  const {deleteTransaction}=useContext(GlobalContext)
  return (
      <li className={transaction.amount>0?'plus': 'minus'}>
        {
          transaction.text
        }
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn'
        onClick={()=>deleteTransaction(transaction.id)}>X</button>
      </li>
  )
}

export default TransactionItem
