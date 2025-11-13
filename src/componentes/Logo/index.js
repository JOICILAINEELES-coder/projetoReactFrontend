import styled from 'styled-components'
import logoImg from '../../assets/logo.svg'


const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo() {
    return(
        <LogoContainer>
          <LogoImage src={logoImg} alt='logo da alura books'/>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo