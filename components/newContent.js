import React, { useState } from "react";
import memesData from "./memesData.js";
// import { ReactComponent as YourSvg } from "";

export default function NewContent() {
  const memesArray = memesData.data.memes;
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });
  const handleChange = (event) => {
    setMeme((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const handelclick = () => {
    setMeme((prevState) => {
      let randomNumber = Math.floor(memesArray.length * Math.random());
      return { ...prevState, randomImage: memesArray[randomNumber].url };
    });
  };
  // const [image, setImage] = useState(memesArray.url);
  // const handelclick = () => {
  //   setImage(() => {
  //     let randomNumber = Math.floor(memesArray.length * Math.random());
  //     return memesArray[randomNumber].url;
  //   });
  // };
  // const [text, setText] = useState({ topText: "", bottomText: "" });

  // const handleChange = (event) => {
  //   setText((prevState) => {
  //     return { ...prevState, [event.target.name]: event.target.value };
  //   });
  // };
  // console.log(text);

  return (
    <div className="nc--div">
      <nav className="nc--nav">
        <h2>Meme Generator</h2>
        <h3>Project-3</h3>
      </nav>
      <main className="main">
        <div className="form">
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            onChange={handleChange}
          />
          <button onClick={handelclick} className="buttn">
            Get A New Image 🤡
          </button>
        </div>
        <div className="meme">
          <h1 className="meme--text top">{meme.topText}</h1>
          <img src={meme.randomImage} className="meme--image" />
          <h1 className="meme--text bottom">{meme.bottomText}</h1>
        </div>
      </main>
    </div>
  );
}
