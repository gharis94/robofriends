import React from 'react';
import CardList from '../Components/CardList';
//import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Sroll';
import ErrorBoundry from '../Components/ErrorBoundry';




class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield:''

        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                return response.json();
            })
                .then(user=>{
                    this.setState({robots:user});
                })
        
    }
    onSearchChange =(event) =>{
        this.setState({searchfield: event.target.value})
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        return(
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    
                </Scroll>
            </div>
            
        )
    }
    
}
export default App;