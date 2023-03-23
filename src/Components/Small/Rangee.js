import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";
import { AuthContext } from "../../Context/Context";

const STEP = 1000;
const MIN = 0;
const MAX = 100000;

const Rangee = () => {
  const [state, setState] = useState([0]);
  const { price, setPrice } = useContext(AuthContext);
  //console.log(price);
  // state = {
  //   values: [0],
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        marginLeft: "15px",
      }}
    >
      <Range
        values={price}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setPrice(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              marginTop: "10px",
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                margin: "auto",
                height: "3px",
                width: "70%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: price,
                  colors: ["#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginLeft: "50%" }} id="output">
        {price}
      </output>
    </div>
  );
};

export default Rangee;
