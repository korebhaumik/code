import React from "react";
import data from "./data";

export default function MainContent(props) {
  return (
    <div className="mc">
      <main>
        <div className="wrapper">
          <div className="one">
            <img src={props.img} className="mc--img" />
          </div>
          <div className="two">
            <div className="two--one">
              <h4 className="two--one--h1">{props.place}</h4>
              <a className="two--one--a" href={props.gmaps}>
                View on Google maps
              </a>
            </div>
            <div className="two--two">
              <h1>{props.name}</h1>
              <h3>{props.date}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
        <hr />
      </main>
    </div>
  );
}
