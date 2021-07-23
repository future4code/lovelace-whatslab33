import React, { Component } from 'react';
import styled from 'styled-components'

const ContainerMensagem = styled.div ` 
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 500px;
  background-color: lightgray;
  color: white;
`
const MensagemEnviada = styled.div ` 
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: solid 1px black;


  div {
    margin-left: 10px
  }
`

const InputUsuario = styled.input ` 
  width: 10%;
`
const ButtonEnviar = styled.button ` 
  margin-left: 20px;
`
const ContainerInputs = styled.div ` 
  display: flex;
  justify-content: space-between;
`


class App extends Component {
  state = {
    mensagem: [
      {
        usuario: "",
        mensagem: "",
        valorInputUsuario: "",
        valorInputMensagem: ""
      }
    ]
  }

  // Pega os valores que estao sendo digitados nos inputs e atribui as variaveis (atributos) valorInputUsuario e valorInputMensagem do objeto mensagem
  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }




  //Atribui os valores das variaveis (atributos) valorInputUsuario e valorInput mensagem às variaveis (atributos) usuario e mensagem
  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    //Cria um novo array com os novos valores adicionados ao array
    const novasMensagens = [...this.state.mensagem, novaMensagem]
    //Define que o array antigo mensagens agora é o novo array novasMensagens, ja com os valores digitados
    this.setState({mensagem: novasMensagens})

    this.state.valorInputUsuario = "";
    this.state.valorInputMensagem = "";
  }




  render() {
    //Copia o array e retorna na tela
    const listaMensagens = this.state.mensagem.map((mensagemEnviada) => {
      return (
        <div>
        <p>
            <b>{mensagemEnviada.usuario}</b>{mensagemEnviada.mensagem}
        </p>
        </div>

      );
    });



    return (
      <ContainerMensagem>
          <MensagemEnviada>
            <div>
                {listaMensagens}
            </div>
          </MensagemEnviada>
          <div>
          <ContainerInputs>
            <InputUsuario 
              value={this.state.valorInputUsuario}
              placeholder="Usuario"
              onChange={this.onChangeInputUsuario}
              />
              <input 
                value={this.state.valorInputMensagem}
                placeholder="Mensagem..."
                onChange={this.onChangeInputMensagem}
              />
              <ButtonEnviar onClick={this.enviaMensagem}>Enviar</ButtonEnviar>
          </ContainerInputs>
          </div>
      </ContainerMensagem>
    );
  }
}

export default App;
