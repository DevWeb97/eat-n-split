import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import initialFriends from "./initialFriends";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [listFriends, setListFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleShowAddFriend = () => {
    // setShowAddFriend((prevState) => !prevState);
    setShowAddFriend((show) => !show);
  };

  const handleSelect = (id) => {
    const selection = listFriends.find((friend) => friend.id === id);

    setSelectedFriend(selection);

    console.log(selection);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList list={listFriends} onSelection={handleSelect} />
        {showAddFriend && (
          <FormAddFriend
            onClick={handleShowAddFriend}
            addFriend={setListFriends}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
