import React from "react";
import initialFriends from "../initialFriends";
import Friend from "./Friend";

function FriendList({ list, onSelection, selectedFriend }) {
  return (
    <div>
      <ul>
        {list.map((friend) => (
          <Friend
            key={friend.id}
            selectedFriend
            select={onSelection}
            infos={friend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
