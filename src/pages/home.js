import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

function Home() {
    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
            <Card />
        </div>
    )
}
export default Home;