import React from "react";

const Card = ({img, title, descripcion, textbutton}) => {

  return (
    <div className="card ">
      <img src={img} className="card-img-top" style={{"width":"305px","height":"200px"}} />
      <div className="card-body" style={{"height":"230px"}}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {descripcion}
        </p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">
          {textbutton}
        </a>
      </div>
    </div>
  );
};

export default Card;
