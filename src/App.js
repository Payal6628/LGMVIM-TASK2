import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="navbar">
          <div className="brand">Brand Name</div>
          <button onClick={fetchUsers}>Get Users</button>
        </div>
      </nav>

      <div className="user-card-grid">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>Email: {user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
