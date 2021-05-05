import ReactJson from "react-json-view";
import React from "react";

const Results = (props) => {
  return (
    <div className="div-api">
      <ReactJson name={false} src={props.data.results} theme="rjv-default" />
    </div>
  );
};
export default Results;
