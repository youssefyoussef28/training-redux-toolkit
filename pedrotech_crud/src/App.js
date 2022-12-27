import "./App.css";
import { useSelector } from "react-redux";
import { addUser, deleteUser, udpateUser } from "./features/Users";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name..."
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username..."
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1] + 1,
                name: name,
                username: userName,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>

              <input
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
                // value={newUserName}
                type="text"
                placeholder="New UserName..."
              />
              <button
                onClick={() => {
                  dispatch(udpateUser({ id: user.id, username: newUserName }));
                }}
              >
                Update UserName
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete UserName
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
