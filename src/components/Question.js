import React, { Fragment } from 'react';

function Question() {
    return (
        <Fragment>
            <h2>Tu Presupuesto</h2>
            <form>
                <input
                type = "number"
                className = "u-full-width"
                placeholder = "Agrega tu presupuesto"
                //onChange = {}
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