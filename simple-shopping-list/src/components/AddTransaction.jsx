import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const {addTransaction} =useContext(GlobalContext);
  const [text,setText]=useState('');
  const [amount,setAmount]=useState(0);
  const onSubmit=(e)=>{
    e.preventDefault();
    //console.log("test");
    const newTransaction={
      id: Math.floor(Math.random *1000000),
      text,
      amount:+amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);

  }
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form id='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>
            Text
          </label>
          <input type="text" 
          value={text}
          placeholder='Enter text...'
          id='text'
          onChange={(e)=>{
            setText(e.target.value)
          }}
          autoComplete='off'/>
        </div>
        <div className='form-control'>
          <label>
            Amount
          </label>
          <input type="number" 
          value={amount}
          placeholder='Enter amount...'
          id='text'
          onChange={(e)=>{
            setAmount(e.target.value)
          }}
          autoComplete='off'/>
        </div>
        <button className='btn'>add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
