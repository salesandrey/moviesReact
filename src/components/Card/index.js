import "./card.css";


const filmes = [{
  "nome": "Vingadores",
  "duracao": "2H30",
  "foto": "vingadores.png",
  "ano": 2010,
  "assistido": true,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Divertidamente",
  "duracao": "2H30",
  "foto": "divertidamente.jpeg",
  "ano": 2014,
  "assistido": true,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
},
{
  "nome": "Avatar O Caminho da Água",
  "duracao": "2H30",
  "foto": "avatar.jpeg",
  "ano": 2023,
  "assistido": false,
  "genero": "Ação/Nerd",
  "descricao": "Filme da Marvel com super-heróis",
  "nota": 5
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