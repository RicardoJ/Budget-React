import React, { useState } from 'react';

function Form(props) {
    const [nameExpense, saveNameExpense] = useState('');
    const [amountExpense, saveAmountExpense] = useState(0);
    const [error, saveError] = useState(false);

    const addExpense = e =>{
        e.preventDefault();
        if (amountExpense <= 0 || isNaN(amountExpense) || nameExpense === '') {
            saveError(true);
            return;
        }
    }
    return (
        <form
        onSubmit = {addExpense}
        >
            <h2>Agrega tus gastos</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange = {e => saveNameExpense(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 1000"
                    onChange = {e => saveAmountExpense(parseInt(e.target.value ,10))}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
    )
}

export default Form;