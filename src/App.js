import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add a friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
