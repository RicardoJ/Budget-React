import React, { Fragment, useState } from 'react';

function Question() {

    const [amount , saveAmount] = useState(0);
    const [error , saveError] = useState(false);

    const addBudget = e =>{
        e.preventDefault();

        if (amount <= 0 || isNaN(amount)) {
            saveError(true);
            return;
        }
    }
    return (
        <Fragment>
            <h2>Tu Presupuesto</h2>
            {error ?<p className = "alert alert-danger error">Presupuesto no es correcto</p> : null}
            <form
            onSubmit = {addBudget}
            >
                <input
                type = "number"
                className = "u-full-width"
                placeholder = "Agrega tu presupuesto"
                onChange = {e => saveAmount(parseInt( e.target.value , 10))}
                />
                <input type = "submit"
                className = "button-primary u-full-width"
                value = "Definir presupuesto"
                />
            </form>
        </Fragment>
    
)
}

export default Question;