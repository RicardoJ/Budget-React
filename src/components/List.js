import React from 'react';
import Expense from './Expense';
function List({expenses , deleteExpense}) {
    return (
    <div className = "gastos-realizados">
        <h2>Listado</h2>
        {expenses.map(expense =>(
            <Expense
            key = {expense.id}
            expense = {expense}
            deleteExpense= {deleteExpense}/>
        ))}
    </div>
)
}
export default List;