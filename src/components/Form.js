import React, { useState } from 'react';

function Form(props) {
    const [nameExpense, saveNameExpense] = useState('');
    const [amountExpense, saveAmountExpense] = useState(0);
    const [error, saveError] = useState(false);

    return (
        <form>
            <h2>Agrega tus gastos</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 1000"
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
    )
}

export default Form;