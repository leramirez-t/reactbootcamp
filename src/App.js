import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
import FunctionGreet from "./components/FunctionGreet";
import ClassGreet from "./components/ClassGreet";

import Post from "./components/Post";
import { CardColumns, CardBody, CardImg, CardDeck } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet firstName="Luis" lastName="Ramirez" />
        <ClassGreet firstName="Luis" lastName="Ramirez" />
      </header>
      <CardColumns>
        <Post
          img="https://miro.medium.com/max/875/1*ckUQpy4qgOO60sVIW9pyoA.png"
          title="BASED ON YOUR READING HISTORY"
          subtitle="Getting Started with the AWS Websockets API"
          text="An introduction to the power of an AWS Lambda real-time AWS Websocket API"
          titlebutton="Button"
          color="warning"
        />
        <Post
          img="https://miro.medium.com/max/875/1*ckUQpy4qgOO60sVIW9pyoA.png"
          title="BASED ON YOUR READING HISTORY"
          subtitle="Getting Started with the AWS Websockets API"
          text="An introduction to the power of an AWS Lambda real-time AWS Websocket API"
          titlebutton="Button"
          color="secondary"
        />
        <Post
          img="https://miro.medium.com/max/875/1*ckUQpy4qgOO60sVIW9pyoA.png"
          title="BASED ON YOUR READING HISTORY"
          subtitle="Getting Started with the AWS Websockets API"
          text="An introduction to the power of an AWS Lambda real-time AWS Websocket API"
          titlebutton="Button"
          color="danger"
        />
      </CardColumns>
    </div>
  );
}

export default App;
