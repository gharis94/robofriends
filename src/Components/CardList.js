import React from 'react';
import styled from 'styled-components';
//import { robots } from './robots';
import Card from './Card';


const CardList = ({robots}) => {
    return (
        <MainContainer>
            {
               robots && robots.map((user, i) => {
                    return (
                        
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                           email={robots[i].email}

                        />
                        


                    )
                })
            }

        </MainContainer>

    )
}
export default CardList;

const MainContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    
`