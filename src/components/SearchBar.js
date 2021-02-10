import React, {Component} from 'react'

class SearchBar extends Component{
  render(){
    return(
      <div className='pa2'>
        <input className='pa2 ba b--green bg-lightest-blue' type='search' placeholder='search' onChange={this.props.searching}/>
      </div>
    );
  }
}

export default SearchBar;
