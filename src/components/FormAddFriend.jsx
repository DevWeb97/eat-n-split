import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onClick, addFriend }) {
  const initialFriend = {
    name: "",
    url: "https://i.pravatar.cc/48?u=",
    balance: 0,
  };
  const [friend, setFriend] = useState(initialFriend);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(friend.name, friend.image);
    // if (!friend.name || !friend.image) return;
    // console.log("he");

    addFriend((prevState) => [
      ...prevState,
      {
        name: friend.name,
        image: friend.url,
        id: crypto.randomUUID(),
        balance: 0,
      },
    ]);
    onClick();
  };

  const handleChange = (e) => {
    setFriend((prevState) => {
      if (e.target.name === "url") {
        console.log("url: ", initialFriend.url.concat(e.target.value));
        return { ...prevState, url: initialFriend.url.concat(e.target.value) };
      } else {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  return (
    <div>
      <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="name">👫Friend Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={friend.name}
          id="name"
          required
        />

        <label htmlFor="url">🌄Img URL</label>
        <input
          type="text"
          name="url"
          id="url"
          value={friend.value}
          onChange={handleChange}
        />

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default FormAddFriend;
