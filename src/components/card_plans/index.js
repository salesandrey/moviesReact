import "./card_plans.css";


const planos = [{
  "nome": "Básico com anúncios",
  "preço": "10,00",
  "descrição": {
    "qualidade": "Boa",
    "resolucao": "720p",
    "plataformas" : "Assista na TV, computador, celular ou tablet",
    "downloads" : "não permite"}
},
{
    "nome": "Padrão",
    "preço": "12,00",
    "descrição": {
      "qualidade": "Ótima",
      "resolucao": "1080p",
      "plataformas" : "Assista na TV, computador, celular ou tablet",
      "downloads" : "permite"}
},

{
    "nome": "Premium",
    "preço": "18,00",
    "descrição": {
      "qualidade": "Excepcional",
      "resolucao": "4K+HDR",
      "plataformas" : "Assista na TV, computador, celular ou tablet",
      "downloads" : "permite"}
},
]

function Detalhes({planoDetalhes}) {
  

  return <ul className="element-description">
              <li>{"Qualidade: " + planoDetalhes.qualidade}</li>
	            <li>{"Resolução: " + planoDetalhes.resolucao}</li>
	            <li>{"Plataformas: " + planoDetalhes.qualidade}</li>
	            <li>{"Downloads: " + planoDetalhes.downloads}</li>
         </ul>

}

export default function CardPlans() {
  return (
    <div className="container text-center">
      <div className="row">
        { planos.map((plano, i) => (
          <div className="col" key={i}>

            <div className="plans-border">
            <h5 className="title-plan">{plano.nome}</h5>
            <br></br>
            <p>{"Preço: R$ " + plano.preço}</p>

            <Detalhes   planoDetalhes={plano.descrição} />
            <br></br>
            <br></br>
            <button className="button-plans"  type="button"> Adquirir </button>
           </div>

          </div>
        ))}
      </div>
    </div>
  )
}