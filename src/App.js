import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [budget, saveBudget] = useState(0);
  const [questionBudget, saveQuestionBudget] = useState(true);
  const [expense , saveExpense] = useState({});
  const [expenses , saveExpenses] = useState([]);

  useEffect(() =>{
    const listExpenses =[...expenses , expense];
    saveExpenses(listExpenses);
  }, []);

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
                  <List
                  expenses = {expenses}
                  />
                  </div>

          )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
