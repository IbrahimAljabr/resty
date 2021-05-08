import React from "react";
import "./history.scss";
import { If, Then } from "react-if";

let link = [];
let historyResult = [];
const History = (props) => {
  let history = props.data.history;
  link = props.data.results.urlResult;
  historyResult = history;

  if (props.data.results.urlResult) {
    if (history === null) {
      historyResult = [];
      historyResult.push(link.join("$"));
      localStorage.setItem("history", JSON.stringify(historyResult));
      console.log("🚀🚀🚀 ~~~~ History ~~~~ props", props.update);
      props.update();
    } else {
      historyResult = [];
      historyResult = history;
      if (!historyResult.includes(link.join("$"))) {
        historyResult.push(link.join("$"));
        localStorage.setItem("history", JSON.stringify(historyResult));
      }
    }
  }
  function urlValue(e) {
    let method = e.target.firstChild.textContent;
    let urlLink = e.target.lastChild.data;
    let txt = document.getElementById("words-input");
    if (txt) {
      txt.value = urlLink;
    }

    props.method(method);
    const active = document.getElementsByClassName("active")[0];
    if (active) {
      active.removeAttribute("class");
    }
    let btn = document.getElementById(method);
    if (btn) {
      btn.setAttribute("class", "active");
    }
  }

  let direct;
  if (historyResult) {
    return (
      <>
        <h1 key={"history"}>History</h1>
        {historyResult.map((value, index) => {
          direct = value.split("$");
          return (
            <div key={index}>
              <If condition={direct[0] === "POST"}>
                <Then>
                  <div className="history" onClick={urlValue} key={index}>
                    <div className="left" key={index + "_"}>
                      <h2 className="post">{direct[0]}</h2>
                      {direct[1]}
                    </div>
                  </div>
                </Then>
              </If>
              <If condition={direct[0] === "GET"}>
                <Then>
                  <div className="history" onClick={urlValue} key={index}>
                    <div className="left" key={index + "_"}>
                      <h2 className="get">{direct[0]}</h2>
                      {direct[1]}
                    </div>
                  </div>
                </Then>
              </If>
              <If condition={direct[0] === "PUT"}>
                <Then>
                  <div className="history" onClick={urlValue} key={index}>
                    <div className="left" key={index + "_"}>
                      <h2 className="put">{direct[0]}</h2>
                      {direct[1]}
                    </div>
                  </div>
                </Then>
              </If>
              <If condition={direct[0] === "DELETE"}>
                <Then>
                  <div className="history" onClick={urlValue} key={index}>
                    <div className="left" key={index + "_"}>
                      <h2 className="delete">{direct[0]}</h2>
                      {direct[1]}
                    </div>
                  </div>
                </Then>
              </If>
            </div>
          );
        })}
      </>
    );
  } else return null;
};

export default History;
