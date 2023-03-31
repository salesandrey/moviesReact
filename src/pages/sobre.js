import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import About from '../components/about';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  

            <Title title={"Sobre"}/>    
                          
            <About /> 
            
        </div>
    )
}

export default Sobre;