import "./movie_description.css";

function Assistido({ javisto }) {
    if (javisto) {
      return <p>Assistido ✔</p>;
    }
    return <p className="item">Não assistido</p>;
  }

export default function MovieDescription({movie}) {
    return (

        

        <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="flex-child-element"> 
                <div> 
                    <img src={"/assets/images/" + movie.foto} alt="Logo filme" width={380} height={600}></img>
                </div>
            </div>


            <div className="flex-parent-element">
                <div className="flex-child-element "> 

                    <p>{movie.nome}</p>
                    <p>duração: {movie.duracao}</p>
                    <p>genero: {movie.genero}</p>
                    <br></br>
                    <p>{movie.descricao}</p>
                    <p>Nota: {movie.nota}</p>
                    <Assistido javisto={movie.assistido} />

                    
                    
                    
            </div>
            
        </div>

        </div>

        </div>

        
    )
}