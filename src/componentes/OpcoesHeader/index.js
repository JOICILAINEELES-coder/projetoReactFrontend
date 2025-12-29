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
      {textoOpcoes.map((texto) => (
        <Opcao key={texto}>
          <Link 
            to={`/${texto.toLowerCase().replace(" ", "")}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>{texto}</p>
          </Link>
        </Opcao>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader