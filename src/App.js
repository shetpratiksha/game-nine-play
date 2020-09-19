import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Component/Game/Game'
class App extends React.Component{
  render(){
    return(
      <div>
        <Game />
      </div>
    )
  }
}

export default App;