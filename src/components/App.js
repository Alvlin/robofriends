import React, {Component} from 'react'
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll';
import './css/app.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
  onSearch = (e) => {
    this.setState({searchField: e.target.value});

  }
  render(){
    const {robots, searchField} = this.state;
    const filterCards = robots.filter((robo)=>{
      return robo.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return(
      <div className='tc'>
        <h1 className="f1"> RoboFriends </h1>
        <SearchBar searching={this.onSearch}/>
        <Scroll>
          <CardList robots={filterCards} />
        </Scroll>
      </div>
    );
  }

}

export default App;
