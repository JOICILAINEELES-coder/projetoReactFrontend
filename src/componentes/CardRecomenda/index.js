import styled from 'styled-components'
import { Titulo } from '../Titulo'

const Card = styled.div`
   align-items: center;
   background-color: #fff;
   border-radius: 10px;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   display: flex;
   margin: 0 auto;
   max-width: 600px;
   padding: 25px 20px;
   justify-content: space-around;
   width: 100%;

`
const Button = styled.button`
   background-color: #eb9b00;
   
   color: #fff;
   padding: 10px 0px;
   font-size: 16px;
   border: none;
   font-weight: 900;
   display: block;
   text-align: center;
   width: 150px;

`
const Subtitulo = styled.h4`
   color: #002f52;
   font-size: 18px;
   font-weight: bold;
   margin: 0px;

`
const ImgLivro = styled.img`
   width: 150px;

`
const Descricao = styled.p`
   color: #6b6b6b;
   font-size: 14px;
   line-height: 22px;
   margin-top: 15px;
   text-align: left;
`



function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
        <div>
            <Titulo 
                $tamanhoFonte='16px' 
                $cor='#eb9b00'
                $alinhamento='left'>
            {titulo}
            </Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
        </div>
        <div>
            <ImgLivro src={img} alt="imagem da aplicação Angular 11" />
            <Button>Saiba mais</Button>
        </div>
        </Card>
    )
}

export default CardRecomenda 