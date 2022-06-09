import React from "react";
import Nav from "./components/nav.js";
import MainContent from "./components/mainContent.js";
import NewContent from "./components/newContent.js";
import New from "./components/new.js";
import data from "./components/data.js";
export default function App() {
  const dataElements = data.map((location) => {
    return (
      <MainContent
        img={location.img}
        place={location.place}
        name={location.name}
        date={location.date}
        text={location.text}
        gmaps={location.gmaps}
      />
    );
  });
  // console.log(dataElements);
  return (
    <body>
      <div className="main--div">
        {/* <New /> */}
        {/* <Nav />
        {dataElements} */}
        {/* <MainContent /> */}

        <NewContent />
      </div>
    </body>
  );
}
