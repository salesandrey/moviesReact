import "./card.css";


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

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {
  return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" height={600}/>
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <br></br>
                <p className="p-card">{"Genero: " + filme.genero}</p>
                <p className="p-card">{"Ano: " + filme.ano}</p>
                
                
                <Assitido javisto={filme.assistido} />
                <a href={`/detalhes/${filme.nome}`} >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}