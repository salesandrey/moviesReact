import "./comments.css";

const commentarios = [{
    "filme": "Vingadores", "comenatarios": [{
        "usuario": "Mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Andrey",
        "comentario": "Muito bom, gostei muito!"
    },
    {
        "usuario": "Gian Macarrão",
        "comentario": "Muito bom, gostei!"
    }
    ]
},
{
    "filme": "Divertidamente", "comenatarios": [{
        "usuario": "Rafa",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Carlos",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},

{
    "filme": "Avatar O Caminho da Água", "comenatarios": [{
        "usuario": "Mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Andrey",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container">

            <br></br>
            <h4 className="title-comments">Comentarios:</h4>
            <br></br>
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        <p>{comment.usuario}</p>
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                    <p>{comment.comentario}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}