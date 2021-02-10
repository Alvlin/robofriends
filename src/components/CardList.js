import React, {Component} from 'react';
import Card from './Card';


// const CardList = ({robots}) => {
//   const cardComponents = robots.map((robot)=> {
//     return <Card id={robot.id} user={robot.user} email={robot.email} img={robot.img}/>
//   });
//   return(
//     <div>
//       {cardComponents}
//     </div>
//   );
// }

class CardList extends Component{

  render(){
    const cardComponents = this.props.robots.map((robot)=> {
      return(
        <Card
          key={robot.id}
          id={robot.id}
          user={robot.user}
          email={robot.email}
          img={robot.img}
        />
      );
    });
    return(
      <div>
        {cardComponents}
      </div>
    );
  }

}


export default CardList;
