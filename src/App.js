import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
      console.log("Super Function");
    
  }

  state = { counter: 0 }
  increase = () => {
    this.setState({ counter: parseInt(this.state.counter) + 1 })
  }

  render() {
    return(
      <div>
    <button onClick={this.increase}>Click Me</button>
    Counter : {this.state.counter}
    </div>
    )

  }


}


// function App()





// return (

//   <div className='App'>
//      <button onClick={props.clickEvent} >clicl me</button>
//   </div>
// );







export default App;

