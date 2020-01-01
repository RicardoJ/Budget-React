import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Form(props) {
    const {saveExpense , saveCreateExpense} = props;
    const [nameExpense, saveNameExpense] = useState('');
    const [amountExpense, saveAmountExpense] = useState(0);
    const [error, saveError] = useState(false);

    const addExpense = e =>{
        e.preventDefault();
        if (amountExpense <= 0 || isNaN(amountExpense) || nameExpense === '') {
            saveError(true);
            return;
        }
        const expense ={
            nameExpense,
            amountExpense,
            id: shortid.generate()
        }
        saveError(false);
        saveExpense(expense);
        saveCreateExpense(true);
        saveNameExpense('');
        saveAmountExpense('');
    }
    return (
        <form
        onSubmit = {addExpense}
        >
            <h2>Agrega tus gastos</h2>
            {error ? <Error message ="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange = {e => saveNameExpense(e.target.value)}
                    value = {nameExpense}
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 1000"
                    onChange = {e => saveAmountExpense(parseInt(e.target.value ,10))}
                    value = {amountExpense}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
    )
}

export default Form;