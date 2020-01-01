import React, { Fragment } from 'react';

const Budget = ({budget ,remaining}) => (
    <Fragment>
        <div className = "alert alert-primary">
            Presupuesto: $ {budget}
        </div>
        <div className = "">
            Restatante: $ {remaining}
        </div>
    </Fragment>

);
 
export default Budget;