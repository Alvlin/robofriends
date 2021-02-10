import React, {Component} from 'react'
import CardList from './CardList';
import SearchBar from './SearchBar';
import {robots} from '../data/robots';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  onSearch(e){
    console.log(e.target.value);
  }
  render(){
    return(
      <div className='tc'>
        <h1> RoboFriends </h1>
        <SearchBar searching={this.onSearch}/>
        <CardList robots={this.state.robots} />
      </div>
    );
  }

}

export default App;
