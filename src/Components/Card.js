import React from 'react';
import styled from 'styled-components';


const Card=({id,name,email})=>{
    return(
        <MainContainer>
                <img alt="" src={`https://robohash.org/${id}?200x200`}/>
                <DescriptionContainer>
                    <p>{name}</p>
                    <p>{email}</p>
                </DescriptionContainer>
            
            
        </MainContainer>
        
    )
}

export default Card;

const MainContainer =styled.div`
    margin:10px;
    border-radius:10px;
    background-color:aliceblue;
`
const DescriptionContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`