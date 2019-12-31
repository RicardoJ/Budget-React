import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {
  const [budget, saveBudget] = useState(0);
  const [questionBudget, saveQuestionBudget] = useState(true);
  const [expense , saveExpense] = useState({});
  const [expenses , saveExpenses] = useState([]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            (questionBudget) ?
              <Question
                saveBudget={saveBudget}
                saveQuestionBudget={saveQuestionBudget}
              />
              : (
                <div className = "row">
                  <div className = "one-half column">
                   <Form
                   saveExpense = {saveExpense}
                   />
                  </div>

                  <div className = "one-half column"></div>
                  </div>

          )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
