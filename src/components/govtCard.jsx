import React from "react";

function govtCard({title,desc,imgLink,button}) {
    return (
        <div className="card w-96 glass">
        <figure><img src={imgLink} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{button}</button>
          </div>
        </div>
      </div>
    )
}

export default govtCard;