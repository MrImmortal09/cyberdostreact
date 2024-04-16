import React from "react";

function GCard({ title, desc, imgLink, buttonLink, isHovered }) {
  return (
    <div className="card w-64 rounded-lg bg-zinc-800">
      <figure>
        <img src={imgLink} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className={`truncate`}>{desc}</p> {/* remove this effect and put something better later, ex: popout, or the same effect but refined... */}
        <div className="card-actions justify-end">
          <a href={buttonLink}>
            <button className="btn btn-primary">Learn More</button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .card:hover .truncate {
          white-space: normal;
        }
      `}</style>
    </div>
  );
}

export default GCard;
