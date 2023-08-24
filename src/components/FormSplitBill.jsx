import React from "react";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X </h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input type="text" name="billValue" id="billValue" />

      <label htmlFor="myExpense">🧍‍♂️ Your expense</label>
      <input type="text" name="myExpense" id="myExpense" />

      <label htmlFor="friendExpense">👫 X's expense</label>
      <input type="text" name="friendExpense" id="friendExpense" disabled />

      <label htmlFor="whosPaying">🤑 Who's paying the bill?</label>
      <select name="whosPaying" id="whosPaying">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
