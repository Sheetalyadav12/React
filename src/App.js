import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function myComponent(){

//   return<h2>hello </h2>
// }
//class components
// class App extends React.Component{
//   render()

//   {
//     return<h1>this is a heading page</h1>
//   }
// }

 function App(props){
  console.log(props.color);

   
    return (
      <div className="App">
        <button onClick={props.clickEvent}>click me!</button>

      </div>
      
    );
  }
  // return myComponent();

// const myComponent= () =>{
//   return<h1>hello</h1>
// }
//    return myComponent();
 
  
  
  
  
  // return  React.createElement (
  //   // "div",
  //   // null,
  //   // React.createElement("h1",null,"hello "),
  //   // React.createElement("p",null,"this is a heading"),
  //   // React.createElement("ul",null,""),
  //   // React.createElement("li",null,"list item1"),
  //   // React.createElement("li",null,"list item 2"),


    
    
  // );


export default App;

