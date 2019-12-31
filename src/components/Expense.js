import React from 'react';

const Expnese = ({expense}) => (
        <li className = "gastos">
            <p>
                {expense.nameExpense}
                <span className = "gasto"> $ {expense.amountExpense}</span>
            </p>
        </li>

);
 
export default Expnese;