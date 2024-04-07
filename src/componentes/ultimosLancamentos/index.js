import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../../componentes/titulo"
import CardRecomendacao from "../cardRecomendacao"
import imagemLivro from "../../imagens/livro2.png"
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo
            cor="#EB9B00"
            tamanhoFonte="36px"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map (livro => (
                    <img src = {livro.src} alt=""></img>
                ))}
            </NovosLivrosContainer>
            <CardRecomendacao
                titulo="Talves você se interesse por"
                subtitulo="React"
                descricao="Construindo uma aplicação utlizando React"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos