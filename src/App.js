import React, { useEffect, useState } from "react";

import { fetchUsers } from "./services/fetch-users";
import Users from "./components/users/Users";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <section className="users">
      <Users users={users} />
    </section>
  );
}

export default App;