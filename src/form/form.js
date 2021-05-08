import "./app.scss";
import React from "react";
import { If, Then } from "react-if";

//       words: "https://swapi.dev/api/people/",

const Form = (props) => {
  let requestOptions = {
    method: props.data.method || "GET",
    headers: { "Content-Type": "application/json" },
    body: null,
  };
  async function handleClick(e) {
    e.preventDefault();
    props.loading();

    try {
      if (requestOptions.method === "POST" || requestOptions.method === "PUT") {
        const postBody = document.getElementById("postBody").value;
        requestOptions.body = JSON.stringify({ title: postBody });

        const url = document.getElementById("words-input").value;
        const raw = await fetch(url, requestOptions);
        const results = await raw.json();
        let history = [requestOptions.method, url];
        props.handleResult({
          results: results,
          urlResult: history,
        });
      } else {
        requestOptions.body = null;
        const url = document.getElementById("words-input").value;
        const raw = await fetch(url);
        const results = await raw.json();
        let history = [requestOptions.method, url];
        props.handleResult({
          results: results,
          urlResult: history,
        });
      }
    } catch (error) {
      console.error(error);
      props.handleResult({
        results: ["The URL you have entered is invalid"],
      });
    }
    props.loading();
  }

  const handleIsActive = (e) => {
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.removeAttribute("class");
    }
    e.target.setAttribute("class", "active");
    const btnText = document.getElementsByClassName("active");
    props.method(btnText[0].textContent);
    requestOptions.method = props.data.method;
    return btnText[0].textContent;
  };

  return (
    <div>
      <button id="GET" onClick={handleIsActive}>
        GET
      </button>
      <button id="POST" onClick={handleIsActive}>
        POST
      </button>
      <button id="PUT" onClick={handleIsActive}>
        PUT
      </button>
      <button id="DELETE" onClick={handleIsActive}>
        DELETE
      </button>
      <form onSubmit={handleClick}>
        <input id="words-input" type="text" />
        <button>Go</button>
        <If
          condition={
            requestOptions.method === "POST" || requestOptions.method === "PUT"
          }
        >
          <Then>
            <textarea id="postBody" className="postBody"></textarea>
          </Then>
        </If>
      </form>
    </div>
  );
};

export { Form };
