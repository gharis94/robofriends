import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import {Monster} from '../Containers/App'

type CardListProp={
    robots:Monster[]
}

const CardList = ({ robots }: CardListProp) => {
    return (
        <MainContainer>
            {
               robots && robots.map((user, i) => {
                    return (
                    
                        <Card
                            key={i}
                            robot={user}

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