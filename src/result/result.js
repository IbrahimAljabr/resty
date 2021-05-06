import ReactJson from "react-json-view";
import React from "react";
import logo from "./gif.gif";

const Results = (props) => {
  // console.log(props.data, "loding");
  if (props.data.loading) {
    return (
      <div>
        <img src={logo} alt="Logo"></img>
      </div>
    );
  }
  if (props.data.results.results) {
    return (
      <div className="div-api">
        <ReactJson name={false} src={props.data} theme="rjv-default" />
      </div>
    );
  } else return null;
};
export default Results;
