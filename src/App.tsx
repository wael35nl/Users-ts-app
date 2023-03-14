import React, { useEffect, useState } from "react";

import { fetchUsers } from "./services/fetch-users";
import { UsersT } from "./types/Todos";
import Users from "./components/users/Users";

const App = () => {
  const [users, setUsers] = useState<UsersT[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      let data: UsersT[] = await fetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <section>
      <Users users={users} />
    </section>
  );
}

export default App;