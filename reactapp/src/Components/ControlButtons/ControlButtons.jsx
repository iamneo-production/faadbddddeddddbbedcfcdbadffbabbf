import React  from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) 
{
  const StartButton = (
    <div className="btn-grp">
        <button className="btn btn-one btn-start"
            onClick={props.handleStart} data-testid="start">
        Start
        </button>
        <button className="btn btn-two" style={{
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
        }} data-testid="reset" disabled>
        Reset
        </button>
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
        <div >
        {props.isPaused ? <button className="btn btn-one" onClick={props.handlePauseResume} data-testid="resume">
        Resume
      </button> : <button className="btn btn-one" onClick={props.handlePauseResume} data-testid="pause">
        Pause
      </button> }
      </div>
      <button className="btn btn-two" onClick={props.handleReset} data-testid="reset">
        Reset
      </button>
      
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}