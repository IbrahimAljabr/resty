import React from "react";
import "./history.scss";

let arr = [];
const Results = (props) => {
  console.log("arrrrrrrrrrrr", arr);
  if (props.data.urlResult) {
    console.log("firsttt", arr);
    if (arr.includes(props.data.urlResult) === true || arr.length === 0) {
      console.log("history", props.data.urlResult);
      arr.push(props.data.urlResult);
    }
  }
  //onClick={UrlValue}
  return (
    <div className="history">
      {arr.map((data, index) => {
        return (
          <div key={index}>
            {data[0] + " "}
            {data[1]}
          </div>
        );
      })}
    </div>
  );
};
export default Results;
