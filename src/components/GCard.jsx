import React, { useState } from "react";

function GCard({ title, desc, imgLink, buttonLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card w-64 md:w-72 rounded-lg bg-zinc-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure>
        <img src={imgLink} alt="car!" className="w-full h-40 md:h-40 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className={`truncate ${isHovered ? 'expand' : ''}`}>{desc}</p>
        {/* Add class 'expand' when hovered */}
        <div className="card-actions justify-end">
          <a href={buttonLink}>
            <button className="btn btn-primary bg-[#00DF9A] text-zinc-900 border-[#00DF9A]">Learn More</button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all 5s ease-in-out;
        }

        .expand {
          white-space: normal;
          transition-delay: 5s; /* Delay the transition for 1 second */
        }
      `}</style>
    </div>
  );
}

export default GCard;
