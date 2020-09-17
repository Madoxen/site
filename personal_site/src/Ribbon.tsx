import React from 'react';
import './Ribbon.css';





class Ribbon extends React.Component {
  constructor(props : any) {
    super(props);
  }


  render()
  {
    return (
      <div className="Ribbon">
        <h1 className="Ribbon-Header">Memory Dump</h1>
        <p className="Ribbon-SubHeader">A blog about programming, games, life and problem solving</p>
      </div>
    );
  }
}



export default Ribbon;
