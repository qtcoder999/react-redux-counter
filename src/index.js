import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <div>{this.props.counter}</div>
      </div>
    )
  }
  componentDidUpdate()
    {
            
    }
}



const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":

    return Object.assign({},state,{counter:state.counter+1})
    case "DECREMENT":
    return Object.assign({},state,{counter:state.counter-1})

    default: 
  }
return state

}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
 
 const mapDispatchToProps = dispatch => {
   return {
     // dispatching plain actions
     increment: () => dispatch({ type: "INCREMENT" }),
     decrement: () => dispatch({ type: "DECREMENT" }),
     reset: () => dispatch({ type: "RESET" })
   };
 };

const store = createStore(rootReducer)



const Container = connect(mapStateToProps,mapDispatchToProps) (App)

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

export default Container;
