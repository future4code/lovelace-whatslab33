import React, { Component } from 'react'

/*Ana - tem que alterar praticamente todo o posicionamento, cor etc*/

const Container = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: auto;
  flex-direction: column;
`
/* Ana - não sei posicionar com flex/grid ajuda ae*/

const ContainerMensagens = styled.div`
  flex-grow: 2;
  padding: 10px;
`

const InputContainer = styled.div`
  border: 2px solid black;
  margin: auto;
`

const Usuario = styled.input`
  width: 80px;
`

const Mensagem = styled.input`
  width: auto;
`

class App extends React.Component {
  render() {
    /*vou fazer a lista que pega as informações no render mesmo*/
    const mensagens = [
      {
      usuario:
      mensagem:
      }
      {
      usuario:
      mensagem:
      }
    ]


/*não sei se posso deixar assim ^^ usuario/mensagem pois ja usei antes*/



    return (
      /*Ana - Vou mexer aqui aí vc me diz
      
        <input placeholder="Usuario"></input>
        <input placeholder="Mensagem..."></input>
        <button>Enviar</button>*/
      <Container>
        <InputContainer>
            {mensagens.map(mensagem)} => {
                return
                {mensagens.usuario}: {mensagens.mensagem}
        }

          <Usuario placeholder={'Nome'} />
          <Mensagem placeholder={'Mensagem'} />
          <button>Enviar</button>
        </InputContainer>
      </Container>
    )
  }
}

export default App

teste teste teste