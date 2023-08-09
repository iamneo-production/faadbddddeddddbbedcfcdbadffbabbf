import React , { useRef } from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) 
{
  const StartButton = (
    <div className="btn-grp">
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
        Start
        </div>
        <div className="btn btn-two" style={{
            shadowOpacity: 1,
            shadowColor: '#000',
            shadowOffset: { width: 10, height: 10 },
            shadowRadius: 5,
            elevation: 5,
            color:"#b9bcbd",
            borderWidth: 5,
            borderColor: "#b9bcbd",
            borderBottomColor: "grey",
            borderRightColor: "grey"
        }}>
        Reset
        </div>
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
        <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
      <div className="btn btn-two" onClick={props.handleReset} >
        Reset
      </div>
      
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}