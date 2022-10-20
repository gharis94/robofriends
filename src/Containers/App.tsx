import React,{useState,useEffect,ChangeEvent} from 'react';
import CardList from '../Components/CardList';
//import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css'
import styled from 'styled-components';
import {fetchData} from '../utils/fetchData'

export type Monster={
    id:string;
    name:string;
    email:string;
}


const App =()=>{
    const [robots,setRobots]=useState<Monster[]>([])
    const [searchField,setSearchField] = useState('')
    const [filterd,setfilterd] =useState(robots)
    useEffect(()=>{
        const fetchDatafn =async()=>{
        const users = await fetchData<Monster[]>('https://jsonplaceholder.typicode.com/users')
            
            setRobots(users)
        }
        fetchDatafn()
    },[])
    
    useEffect(()=>{
        const rsp = robots.filter(val=>val.name.toLowerCase().includes(searchField))
        setfilterd(rsp)
    },[searchField,robots])

    const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
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