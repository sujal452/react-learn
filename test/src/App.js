import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [approvedAmount, setApprovedAmount] = useState('');
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [pendingAmount, setPendingAmount] = useState(0);

  // Handle change in approved amount
  const handleApprovedAmountChange = (e) => {
    const amount = parseFloat(e.target.value) || 0;
    setApprovedAmount(amount);
    setPendingAmount(amount - totalExpenses);
  };

  // Handle change in expense title
  const handleExpenseTitleChange = (e) => {
    setExpenseTitle(e.target.value);
  };

  // Handle change in expense amount
  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(parseFloat(e.target.value) || '');
  };

  // Handle adding a new expense
  const handleAddExpense = () => {
    if (expenseAmount > 0 && expenseTitle) {
      const newTotalExpenses = totalExpenses + expenseAmount;
      setTotalExpenses(newTotalExpenses);
      setPendingAmount(approvedAmount - newTotalExpenses);
      setExpenseTitle('');
      setExpenseAmount('');
    }
  };

  return (
    <div className="App">
      <div className="section">
        <h2>Budget Manager</h2>
        <label>
          Approved Amount: 
          <input
            type="text"
            placeholder="Enter approved amount"
            value={approvedAmount}
            onChange={handleApprovedAmountChange}
          />
        </label>
      </div>
      <br />

      <div className="section">
        <h2>Add Expense</h2>
        <label>
          Title:
          <input
            type="text"
            placeholder="Enter title"
            value={expenseTitle}
            onChange={handleExpenseTitleChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="text"
            placeholder="Enter amount"
            value={expenseAmount}
            onChange={handleExpenseAmountChange}
          />
        </label>
        <br />
        <button onClick={handleAddExpense}>+</button>
        <button onClick={handleAddExpense}>Submit</button>
      </div>
      <br />

      <div className="section">
        <label>
          Pending Amount:
          <input type="text" placeholder="Pending amount" value={pendingAmount} readOnly />
        </label>
        <br />
        <label>
          Total Expenses:
          <input type="text" placeholder="Total expenses" value={totalExpenses} readOnly />
        </label>
      </div>
    </div>
  );
}

export default App;
 