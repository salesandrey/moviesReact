import "./about.css";

const description = "A missão da Netflix é entreter o mundo, e é por isso que levamos até você as melhores séries, documentários, filmes e jogos para celulares e dispositivos móveis. Nossos assinantes controlam o que querem ver e quando, com uma única assinatura. Nosso serviço de streaming está disponível em mais de 30 idiomas e 190 países. Somos os maiores fãs de entretenimento do mundo e estamos sempre buscando novas maneiras de ajudar você a descobrir sua próxima história favorita."

export default function About() {
    return (

        <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">

            <div className="flex-parent-element">
                <div className="flex-child-element "> 

                    <h2>Sobre a Netflix</h2>
                    <br></br>
                    <p>{description}</p>
            </div>
            
            
            <div className="flex-child-element"> 
                <div> 
                    <img className="logo" src="/assets/images/preview.png" alt="Logo Netflix" width={400} height={400} ></img>
                </div>
            </div>
            
        </div>

        </div>

        </div>

        
    )
}