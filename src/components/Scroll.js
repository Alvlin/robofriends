import React, {Component} from 'react';
class Scroll extends Component {
  render(){
    return(
      <div style={{overflowY:'scroll', height:'760px', border:'solid 1px black'}}>
        {this.props.children}
      </div>
    );
  }
}
export default Scroll;
