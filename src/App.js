import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import React, { useState } from "react";
import Colors from './Colors';
import ColorWrapper from './ColorWrapper';
// import ColorDetail from './ColorDetail';
import ColorForm from './ColorForm';
import Nav from './Nav';
import './App.css';

function App() {
  const INITIAL_STATE = [
    {colorName: "red", color: "#FF0000"}, 
    {colorName: "olive", color: "#808000"}
  ]
  const [colors, setColors] = useState(INITIAL_STATE)

  const addColor = (newColor) => {
    setColors(colors => [{...newColor}, ...colors])
  }
  
  return (
    <div className="App">
      <Nav colors={colors} />
      <Switch>
        <Route exact path="/colors/new" >
          <ColorForm addColor={addColor}/> 
        </Route>
        <Route path="/colors/:color" >
          <ColorWrapper colors={colors}/> 
        </Route>
        <Route exact path="/colors" >
          <Colors colors={colors}/> 
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
