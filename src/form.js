import "./style/app.scss";
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: "http://localhost:3000/",
      method: "",
    };
  }
  handleIsActive = (e) => {
    const active = document.getElementsByClassName("active")[0];
    active.removeAttribute("class");
    e.target.setAttribute("class", "active");
    const btnText = document.getElementsByClassName("active");
    this.setState({ method: btnText[0].textContent });
  };
  handleClick = (e) => {
    const words = this.state.words;
    this.setState({ words });
  };
  handleWords = (e) => {
    const words = e.target.value;
    this.setState({ words });
  };
  render() {
    return (
      <main>
        <input id="words-input" type="text" onChange={this.handleWords} />
        <button onClick={this.handleClick} className="">
          Click
        </button>
        <button onClick={this.handleIsActive} className="active">
          GET
        </button>
        <button onClick={this.handleIsActive} className="">
          POST
        </button>
        <button onClick={this.handleIsActive} className="">
          PUT
        </button>
        <button onClick={this.handleIsActive} className="">
          DELETE
        </button>
        <div id="result">
          {this.state.method} {this.state.words}
        </div>
      </main>
    );
  }
}
export default Main;
