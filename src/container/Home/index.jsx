import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import People from "../../assets/People.svg";
import Arrow from "../../assets/Arrow.svg";
import Axios from "axios";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await Axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push('/usuarios')
  }

  return (
    <Container>
      <Image alt="People talk" src={People} />
      <ContainerItems>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" type= "number" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Arrow" src={Arrow} />
        </Button>

      </ContainerItems>
    </Container>
  );
}

export default App;
