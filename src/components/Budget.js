import React, { Fragment } from 'react';
import {revisarPresupuesto} from '../helper';

const Budget = ({budget ,remaining}) => (
    <Fragment>
        <div className = "alert alert-primary">
            Presupuesto: $ {budget}
        </div>
        <div className = {revisarPresupuesto(budget , remaining)}>
            Restante: $ {remaining}
        </div>
    </Fragment>

);
 
export default Budget;