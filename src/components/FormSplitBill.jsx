import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  const [billValue, setBillValue] = useState("");
  const [personalExpense, setPersonalExpense] = useState("");
  const [billPayer, setBillPayer] = useState("user");
  const [friendExpense, setFriendExpense] = useState("");

  let { name, id } = selectedFriend || {};
  name = name || "your friend";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(billPayer);
  };

  const handleFriendExpense = () => {
    setFriendExpense();
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name} </h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input
        type="text"
        name="billValue"
        id="billValue"
        autoFocus
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />

      <label htmlFor="myExpense">🧍‍♂️ Your expense</label>
      <input
        type="text"
        name="myExpense"
        id="myExpense"
        value={personalExpense}
        onChange={(e) => setPersonalExpense(e.target.value)}
      />

      <label htmlFor="friendExpense">👫 {name}'s expense</label>
      <input
        type="text"
        name="friendExpense"
        id="friendExpense"
        value={friendExpense}
        onChange={(e) => console.log("s")}
        disabled
      />

      <label htmlFor="whosPaying">🤑 Who's paying the bill?</label>
      <select
        name="whosPaying"
        id="whosPaying"
        onInput={(e) => setBillPayer(e.target.value)}
      >
        <option defaultValue={billPayer} value="user">
          You
        </option>
        <option value="friend">{name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
