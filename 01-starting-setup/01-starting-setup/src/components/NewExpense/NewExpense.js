import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={props.addExpenseHandler}/>
        </div>
    );
};

export default NewExpense;