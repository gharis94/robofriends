import React,{useState,useEffect} from 'react';
import CardList from '../Components/CardList';
//import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css'
import styled from 'styled-components';


const App =()=>{
    const [robots,setRobots]=useState([])
    const [searchField,setSearchField] = useState('')
    const [filterd,setfilterd] =useState(robots)
    useEffect(()=>{
        const fetchData =async()=>{
            const rsp = await fetch('https://jsonplaceholder.typicode.com/users')
            const rspJSON = await rsp.json()
            setRobots(rspJSON)
        }
        fetchData()
    },[])
    
    useEffect(()=>{
        const rsp = robots.filter(val=>val.name.toLowerCase().includes(searchField))
        setfilterd(rsp)
    },[searchField,robots])

    const handleChange=(e)=>{
        setSearchField(e.target.value.toLowerCase())
    }


    return(
        
        <MainContainer>
            <h1>Robofriends</h1>
            <SearchBox SearchChange={handleChange}/>
            <CardList robots={filterd}/>
         </MainContainer>
    )
}


export default App;

const MainContainer = styled.div`
    margin:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
`