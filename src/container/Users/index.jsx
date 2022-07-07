import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../../assets/Avatar.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from "../../assets/Trash.svg";
import Axios from "axios";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  Button,
  User,
} from "./styles.jsx";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await Axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  function backPage() {
    history.push("/");
  }

  async function deleteUser(userId) {
    await Axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="People talk" src={Avatar} />
      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Trash" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={backPage}>
          <img alt="Arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default Users;
