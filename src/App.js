import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Foother from './components/Foother';
import Aboutme from './components/Aboutme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
      <BrowserRouter>
        <Header name="Dejan Atanasovski"/>
        <Body live="Manchester"/>
        <Foother study="Code Nation"/>
        <switch>
        <Route exact path="/Aboutme" component={Aboutme}/>
        </switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
