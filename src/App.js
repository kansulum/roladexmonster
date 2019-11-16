import React,{Component} from 'react';


import {CardList} from './components/card-list/card-list-component';

import {SearchBox} from './components/search-box/search-box-component';
import './App.css';

class App extends Component {
constructor(){
  super();

  this.state = {
    monsters:[],
    fieldSearch:''
  }
}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }

  handleChange = e => {
    this.setState({fieldSearch:e.target.value});
  }


  render(){

    const {monsters,fieldSearch} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(fieldSearch.toLowerCase())
      )


    return (  
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monster' handlechange={this.handleChange} />
      <CardList monsters={filteredMonsters}></CardList>      
    </div>
    );
  }
}
export default App;
