import React,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={
    transactions:[{
        id:1,
        text:"flower",
        amount:-20

    },
    {
        id:2,
        text:"Salary",
        amount:300

    },
    {
        id:3,
        text:"Book",
        amount:-10

    },
    {
        id:4,
        text:"Camera",
        amount:150

    }]

}
export const GlobalContext=createContext(initialState);

//provide components
export const GlobalProvider =({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    //actions
    function deleTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        });
    }
    return(
        <GlobalContext.Provider
        value={{
            transactions:state.transactions,
            deleTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
