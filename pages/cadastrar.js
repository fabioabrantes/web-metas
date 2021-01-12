import React, { useState } from 'react';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input,Alert } from 'reactstrap';

import Menu from '../components/Menu';

function cadastrar() {

  const [meta, setMeta] = useState({
    name: '',
    description: '',
    status: ''
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  const onChangeInput = e => setMeta({ ...meta, [e.target.name]: e.target.value });

  const sendMeta = async (e) => {
    e.preventDefault();
    setResponse({ formSave: true });

    try {
      const res = await fetch('http://cursocelkeapi-com-br.umbler.net/metas', {
        method: 'POST',
        body: JSON.stringify(meta),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });

      const responseEnv = await res.json();
      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        });
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        });
      }
    } catch (error) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Erro: meta não cadastrada com sucesso'
      });
    }

  }

  return (
    <>

      <Menu/>
      <Jumbotron fluid className="form">
        <style>
          {`.form{
              background-color: #171941;
              color: #bf38ac;
              padding-top: 30px;
              padding-bottom: 150px;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container>
          <h1 className="display-4 text-center">Cadastrar minha meta.</h1>
          <hr />
          {
            response.type === 'error' ? <Alert color="danger"> {response.message}</Alert> : ""
          }
          {response.type === 'success' ? <Alert color= "success"> {response.message}</Alert> : ""}

          <Form onSubmit={sendMeta}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Nome da meta" onChange={onChangeInput} />
            </FormGroup>

            <FormGroup>
              <Label for="description">Descrição</Label>
              <Input type="textarea" name="description" id="description" placeholder="Descrição da meta" onChange={onChangeInput} />
            </FormGroup>

            <FormGroup>
              <Label for="status">Status</Label>
              <Input type="text" name="status" id="status" placeholder="Status da meta" onChange={onChangeInput} />
            </FormGroup>

            {response.formSave ? <Button type="submit" color="danger" disabled>Enviando ... </Button> : <Button type="submit" outline color="primary">Cadastrar</Button>}
          </Form>
        </Container>
      </Jumbotron>
    </>
  )
}


export default cadastrar