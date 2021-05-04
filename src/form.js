import "./style/app.scss";
import React from "react";

// class Main extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       words: "https://swapi.dev/api/people/",
//       method: "",
//       results: "",
//     };
//   }
const Form = (props) => {
  console.log("whattt", props.handleResult);

  async function handleClick(e) {
    e.preventDefault();
    const url = document.getElementById("words-input").value;
    console.log(url);
    try {
      const raw = await fetch(url);
      const data = await raw.json();
      const results = data.results.reduce((acc, person) => {
        acc.push({ name: person.name, url: person.url });
        return acc;
      }, []);
      //   props.handleResult(results);
      //   console.log(results);
      props.handleResult({ results: results });
    } catch (error) {
      console.error(error);
    }
  }

  function handleIsActive(e) {
    const active = document.getElementsByClassName("active")[0];
    active.removeAttribute("class");
    e.target.setAttribute("class", "active");
    const btnText = document.getElementsByClassName("active");
    // this.setState({ method: btnText[0].textContent });
    return btnText[0].textContent;
  }

  return (
    <>
      <button onClick={handleIsActive} className="active">
        GET
      </button>
      <button onClick={handleIsActive} className="">
        POST
      </button>
      <button onClick={handleIsActive} className="">
        PUT
      </button>
      <button onClick={handleIsActive} className="">
        DELETE
      </button>
      <form onSubmit={handleClick}>
        <input id="words-input" type="text" />
        <button>Go</button>
      </form>
    </>
  );
};
export default Form;
