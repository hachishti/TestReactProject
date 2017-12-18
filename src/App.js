import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let varDefaultStyle = {
  color: 'red'
}
class ChildClass extends Component{
render(){
return(
    <div style={{width: '20%', display: 'inline-block', ...varDefaultStyle}}>
    <h2>Number Text</h2>
    </div>
    );
  }
}

class Filters extends Component{
  render(){
    return(
    <div style={varDefaultStyle}>
      <img/>
      <input type="text"/>
      
    </div>        
    );
  }
}

class PlayLists extends Component{
  render(){
    return(
      <div style={{...varDefaultStyle, width: "20%", display: 'inline-block'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>  <li>Song 2</li>  <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={varDefaultStyle}>Title</h1>
        <ChildClass/>
          <ChildClass/>
          <Filters/>
          <PlayLists/>
          <PlayLists/>
          <PlayLists/>
          <PlayLists/>
      </div>
    );
  }
}

export default App;
