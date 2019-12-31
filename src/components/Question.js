import React, { Fragment, useState } from 'react';
import Error from './Error';

function Question(props) {

    const {saveBudget , saveQuestionBudget} = props;

    const [amount , saveAmount] = useState(0);
    const [error , saveError] = useState(false);

    const addBudget = e =>{
        e.preventDefault();

        if (amount <= 0 || isNaN(amount)) {
            saveError(true);
            return;
        }
        saveError(false);
        saveBudget(amount);
        saveQuestionBudget(false);
    }
    return (
        <Fragment>
            <h2>Tu Presupuesto</h2>
            {error ? <Error message = "El presupuesto no es correcto"/> : null}
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