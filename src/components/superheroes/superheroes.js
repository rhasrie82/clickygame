import React from "react";

import "./superheroes.css";





const Superheroes = props => (

  <div className="card" onClick={props.imageClick}>

    <div className="img-container">

      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} width="150" height="100" />

    </div>

  </div>

);



export default Superheroes;