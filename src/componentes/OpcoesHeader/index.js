import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcoes = styled.ul`
   display: flex;
`
const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
       <Link to={`/${texto.toLowerCase()}`}><Opcao key={index}><p>{texto}</p></Opcao></Link>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader