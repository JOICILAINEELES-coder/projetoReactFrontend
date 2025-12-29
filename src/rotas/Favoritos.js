import { useEffect, useState } from 'react';
import { getFavoritos } from '../servicos/favoritos';
import styled from 'styled-components';
import livroImg from '../assets/angular.png';
import { deleteFavorito } from '../servicos/favoritos';

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    gap: 20px;
    p {
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`
const BotaoRemover = styled.button`
    background-color: #002f52;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro ${id} removido dos favoritos!`);
    fetchFavoritos();
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);
  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.map((favorito) => {
              const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'
              const fallbackImage = 'https://via.placeholder.com/150x200?text=Sem+Imagem'
              const imageSrc = favorito.src
                ? (favorito.src.startsWith('http') ? favorito.src : `${apiUrl}/${favorito.src}`)
                : (favorito.imagem ? `${apiUrl}/uploads/${favorito.imagem}` : fallbackImage);

              return (
                <Resultado key={favorito.id || favorito.nome}>

                  <p>{favorito.nome}</p>
                  <img src={imageSrc || livroImg} alt={favorito.nome || 'capa do livro'} />
                  <BotaoRemover onClick={() => deletarFavorito(favorito.id)}>Remover dos Favoritos</BotaoRemover>
                </Resultado>
              )
            })}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
