import React from "react";


const Jumbotron = ({title, descripcion, textbutton}) =>{
 return(
 <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">{title}</h1>
      <p className="col-md-12 fs-4">{descripcion}</p>
      <button className="btn btn-primary btn-lg" type="button">{textbutton}</button>
    </div>
  </div>
 );
};

export default Jumbotron;