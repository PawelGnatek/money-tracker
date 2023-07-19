import "./ExpForm.css";

import { useState } from "react";

const ExpForm = (props) => {
  const [titleInput, titleEntered] = useState("");
  const [amountInput, amountEntered] = useState("");
  const [dateInput, dateEntered] = useState("");

  const newTitleHandler = (event) => {
    titleEntered(event.target.value);
  };
  const amountHandler = (event) => {
    amountEntered(event.target.value);
  };
  const dateHandler = (event) => {
    dateEntered(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expInput = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
    };

    props.onAddSubmit(expInput);

    titleEntered("");
    amountEntered("");
    dateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={titleInput}
            onChange={newTitleHandler}
            placeholder="New Expense Title"
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amountInput}
            onChange={amountHandler}
            placeholder="£ 0.00"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={dateInput}
            onChange={dateHandler}
            type="date"
            min="2021-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button typeof="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">ADD New Expense</button>
      </div>
    </form>
  );
};

export default ExpForm;
