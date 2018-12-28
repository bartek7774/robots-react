import React,{Component} from 'react';

class CounterButton extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.counter!==nextState.counter){
      return true;
    }
    return false;
  }
  render(){
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={()=>this.setState(state=>({counter: state.counter+1}))}>
          Count: {this.state.counter}
        </button>
    )
  }
}

export default CounterButton;