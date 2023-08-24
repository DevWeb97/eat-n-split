import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {/* {!isVisible && (
        <button className="button" onClick={handleClick}>
          Add a friend
        </button>
      )} */}

      {isVisible && (
        <form
          action=""
          className="form-add-friend"
          onSubmit={(e) => {
            e.preventDefault();
            // handleClick(e);
          }}
        >
          <label htmlFor="friend-name">👫Friend Name</label>
          <input type="text" name="friend-name" id="friend-name" />

          <label htmlFor="friend-name">🌄Img URL</label>
          <input type="text" name="friend-name" id="friend-name" />

          <label></label>
          <Button>Add</Button>
        </form>
      )}
    </div>
  );
}

export default FormAddFriend;
