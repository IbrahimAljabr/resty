import ReactJson from "react-json-view";
import React from "react";
import logo from "./gif.gif";
import "./result.scss";

const Results = (props) => {
  if (props.data.loading) {
    return (
      <div>
        <img src={logo} alt="Logo"></img>
      </div>
    );
  }
  if (props.data.results.results) {
    if (
      props.data.results.results[0] === "The URL you have entered is invalid"
    ) {
      return (
        <div className="errorMessage">The URL you have entered is invalid</div>
      );
    } else if (props.data.results.results) {
      return (
        <div className="div-api">
          <ReactJson name={false} src={props.data} theme="rjv-default" />
        </div>
      );
    } else return null;
  } else return null;
};
export default Results;
