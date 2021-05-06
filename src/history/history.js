import React from "react";
import "./history.scss";

const Results = (props) => {
  console.log(props.data, "PPPPPPPPPPPPPPP");
  if (props.results) {
  }
  return (
    <>
      <h1>History</h1>
      {/* <div className="history">
        <div className="left">
          <h2>{data[0]}</h2>
          {data[1]}
        </div>
      </div> */}

      {/* {arr.map((data, index) => {
        return (
          <div className="history">
            <div className="left" key={index}>
              <h2>{data[0]}</h2>
              {data[1]}
            </div>
          </div>
        );
      })} */}
    </>
  );
};
export default Results;
