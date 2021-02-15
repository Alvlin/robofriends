import React, {Component} from 'react';
import './css/card.css';
class Card extends Component{

  render(){
    return(
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={this.props.img} alt='Robot'/>
        <div>
          <h4> {this.props.name} </h4>
          <p> {this.props.email} </p>
        </div>
      </div>
    );
  }
}
export default Card;
