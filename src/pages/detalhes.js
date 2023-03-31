import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import MovieDescription from '../components/movie_description';
import Comments from './../components/Comments/index';

const filmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2010,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
    "nota": 5
  },
  {
    "nome": "Divertidamente",
    "duracao": "2H30",
    "foto": "divertidamente.jpeg",
    "ano": 2014,
    "assistido": true,
    "genero": "Animação",
    "descricao": "Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente.",
    "nota": 5
  },
  {
    "nome": "Avatar O Caminho da Água",
    "duracao": "3H12",
    "foto": "avatar.jpeg",
    "ano": 2022,
    "assistido": false,
    "genero": "Aventura",
    "descricao": "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.",
    "nota": 4
  }
  ]


function Detalhes() {
    const { filme } = useParams();
    const filmeEscolhido = filmes.filter(function(f){
        return  f.nome === filme
        
});


    return (
        <div>
            <Title
                title={filme}
                text="" />


            <div className="container text-center">
                <MovieDescription
                     movie={filmeEscolhido[0]} />     
            </div>

            <div className="container text-center">
                <Comments
                     filme={filmeEscolhido[0].nome} />     
            </div>


        </div>
    )
}

export default Detalhes;