import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'



const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: transparent;
    color: #fff;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`
const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
    text-align: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    width: 90%;
    margin-top: 20px;
    p {
        width: 200px;
    }
    
    img {
        width: 100px;
    }
    
    &:hover {
        border: 1px solid white;
    }
`

const BotaoFavoritar = styled.button`
    background-color: #002f52;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
        console.log(livrosDaAPI)

    }

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro ${id} adicionado aos favoritos!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                id="pesquisa-livro"
                name="pesquisa-livro"
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value
                    if (!textoDigitado) return setLivrosPesquisados([])
                    const resultadoPesquisa = livros.filter(livro =>
                        livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map(livro => {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'
                const fallbackImage = 'https://via.placeholder.com/150x200?text=Sem+Imagem'

                const imageSrc = livro.src
                    ? (livro.src.startsWith('http') ? livro.src : `${apiUrl}/${livro.src}`)
                    : (livro.imagem ? `${apiUrl}/uploads/${livro.imagem}` : fallbackImage);
                return (
                    <Resultado key={livro.id || livro.nome}>
                        <p>{livro.nome}</p>
                        <img
                            src={imageSrc}
                            alt={livro.nome}
                            onError={e => { e.currentTarget.src = fallbackImage }}
                        />
                        <BotaoFavoritar
                            onClick={evento => {
                                evento.stopPropagation()
                                insertFavorito(livro.id)
                            }}
                        >
                            Favoritar
                        </BotaoFavoritar>
                    </Resultado>
                )
            })}
        </PesquisaContainer>
    )
}

export default Pesquisa