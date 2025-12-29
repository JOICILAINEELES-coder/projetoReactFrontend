import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`


function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home
