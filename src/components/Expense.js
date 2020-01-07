import React from 'react';

const Expense = ({ expense , deleteExpense }) => {

   
    return (
        <li className="gastos">
            <p>
                {expense.nameExpense}
                <span className="gasto"> $ {expense.amountExpense}</span>
                <button
                    className="button-danger"
                    type="button"
                    onClick={() => deleteExpense(expense.id)}
                >Eliminar</button>
            </p>
        </li>

    );
}
export default Expense;