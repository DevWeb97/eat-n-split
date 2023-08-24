import React from "react";
import initialFriends from "../initialFriends";
import Friend from "./Friend";

function FriendList() {
  return (
    <div>
      <ul>
        {initialFriends.map((friend) => (
          <Friend key={friend.id} infos={friend} />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
