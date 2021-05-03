import React from "react";
import "./style/header.scss";
import "./style/app.scss";
import "./style/fotter.scss";
const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
    </header>
  );
};
// Footer Component (functional stateless component)
const Footer = () => <footer>&copy; 2021 ASAC</footer>;
// Main Component (stateful class component)
class Main extends React.Component {
  constructor(props) {
    super(props);
    //initial state of the component
    this.state = {
      words: "http://localhost:3000/",
      method: "",
    };
    // this line is needed if you create a function in the class without using arrow functions
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
    // we never ever ever change the state directly
    // DONT DO THIS >>>>>> this.state = {words}
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
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
