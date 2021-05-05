import "./app.scss";
import React from "react";

//       words: "https://swapi.dev/api/people/",
let requestOptions = {
  method: "GET",
};
const Form = (props) => {
  async function handleClick(e) {
    e.preventDefault();
    try {
      const url = document.getElementById("words-input").value;
      const raw = await fetch(url, requestOptions);
      const data = await raw.json();
      const results = data.results.reduce((acc, person) => {
        acc.push({ name: person.name, url: person.url });
        return acc;
      }, []);
      let history = [requestOptions.method, url];
      props.handleResult({
        results: results,
        urlResult: history,
      });
    } catch (error) {
      console.error(error);
      props.handleResult({
        results: ["The URL you have entered is invalid"],
      });
    }
  }

  function handleIsActive(e) {
    const active = document.getElementsByClassName("active")[0];
    active.removeAttribute("class");
    e.target.setAttribute("class", "active");
    const btnText = document.getElementsByClassName("active");
    // console.log(btnText[0].textContent);
    requestOptions.method = btnText[0].textContent;
    return btnText[0].textContent;
  }

  return (
    <div>
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
    </div>
  );
};
export default Form;
