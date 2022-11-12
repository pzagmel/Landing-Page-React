import React from "react";

const Card = ({img, title, descripcion, textbutton}) => {

  return (
    <div className="card ">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
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
