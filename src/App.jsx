import React from "react";
import People from './assets/People_1.svg'
import Arrow from './assets/Arrow.svg'

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
  return (
    <Container>
      <Image alt="People talk" src ={People} />
      <ContainerItems>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="Arrow" src={Arrow}/></Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
