import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helper';
import Error from './Error';

const Budget = ({ budget, remaining }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={revisarPresupuesto(budget, remaining)}>
                Restante: $ {
                    remaining < 0 || remaining > budget ? <Error message="Error" /> : remaining
                    
                }
            </div>
        </Fragment>

    );
}
export default Budget;