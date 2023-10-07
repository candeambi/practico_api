import React from 'react';
import styled from "styled-components";
import Sunrise from "../icons/sunrise.svg";
import Sunset from "../icons/sunset.svg";

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(245, 240, 169);
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
`;

const TitleCard = styled.p`
    font-size: large;
    font-family: Georgia, 'Times New Roman', Times, serif;
    grid-column: 1 / span 2;
    text-align: center;
`;

const Value = styled.h3`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const SecondValue = styled.h3`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const Icon = styled.div`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center; 
`;

const SecondIcon = styled.div`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center;
`;

function SunriseSunset () {
    return (
        <Card>
            <TitleCard>Amanecer y atardecer</TitleCard>
            <Value>6:35 AM</Value>
            <Icon>
                <img src={Sunrise} alt='Amanecer' width={'60px'}/>  
            </Icon>
            <SecondValue>5:42 PM</SecondValue>
            <SecondIcon>
                <img src={Sunset} alt='Atardecer' width={'60px'} />  
            </SecondIcon>
        </Card>
    );
}

export default SunriseSunset;