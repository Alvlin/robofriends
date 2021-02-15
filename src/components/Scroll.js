import React, {Component} from 'react';
class Scroll extends Component {
  render(){
    return(
      <div style={{overflowY:'scroll', height:'760px'}}>
        {this.props.children}
      </div>
    );
  }
}
export default Scroll;
