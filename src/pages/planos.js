import React from 'react';
import Title from './../components/Title/index';
import CardPlans from '../components/card_plans';
 
function Planos(){
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
            <CardPlans />       
        </div>
    )   
}
 
export default Planos;