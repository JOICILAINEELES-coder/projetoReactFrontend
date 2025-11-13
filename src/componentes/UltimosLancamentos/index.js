import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../assets/angular.png'
import { Titulo } from '../Titulo'



const UltimosLancamentosContainer = styled.section`
   background-color: #ebecee;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;

`


const NovoslivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    
`
 

function UltimosLancamentos() {
  return(
     <UltimosLancamentosContainer>
        <Titulo 
        cor='#eb9b00'
        tamanhofonte='36px'
        >ÚLTIMOS LANÇAMENTOS</Titulo>
    <NovoslivrosContainer>
       { livros.map(livro => (
         <div key={livro.id || livro.nome}>
           <img src={livro.src} alt={livro.nome}/>
         </div> 
     ))}
    </NovoslivrosContainer>
    <CardRecomenda 
      titulo="Talvez você se interesse por..."
      subtitulo="Angular 11"
      descricao="Construindo uma aplicação com a plataforma Google"
      img={imagemLivro}
    />
     </UltimosLancamentosContainer>
  )
}

export default  UltimosLancamentos