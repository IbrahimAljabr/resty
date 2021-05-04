import ReactJson from "react-json-view";
import React from "react";

const Results = (props) => {
  console.log("result123", props.data);
  return (
    <div>
      <ReactJson name={false} src={props.data} theme="rjv-default" />
    </div>
  );
};
export default Results;
