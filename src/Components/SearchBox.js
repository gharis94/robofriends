import React from 'react';
import styled from 'styled-components';

const SearchBox = ({SearchChange}) =>{
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