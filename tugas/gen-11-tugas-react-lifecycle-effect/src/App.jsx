import React from "react";
import Lifecycle from "./LifeCycle";
import SideEffect from "./SideEffect";

export default class App extends React.Component{

  
  render(){
    return <div>
      <SideEffect />
      <br />
      <Lifecycle />
    </div>
  }
}