import React,{ChangeEventHandler,ChangeEvent} from 'react';
import styled from 'styled-components';

type Prop={
   SearchChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

const SearchBox = ({SearchChange}:Prop) =>{
    return(
        
        
            <Container 
                className='pa3 ba b--green bg-lightest-blue'
                type='seach' placeholder='search robots'
                onChange={SearchChange}
            />
            
        
    )
}
export default SearchBox;

const Container = styled.input`
    border-radius:5px;
    border-block:inherit;
    height:20px;
    width:250px;
`