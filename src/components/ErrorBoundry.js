import React, {Component} from 'react'

class ErrorBoundry extends Component{
  constructor(){
    super();
    this.state = {
      hasErr: false
    }
  }
  componentDidCatch(){
    this.setState({hasErr:true});
  }
  render(){
    if(this.state.hasErr) return <h1> Uh-Oh Something Went Wrong </h1>
    return this.props.children;
  }

}
export default ErrorBoundry;
