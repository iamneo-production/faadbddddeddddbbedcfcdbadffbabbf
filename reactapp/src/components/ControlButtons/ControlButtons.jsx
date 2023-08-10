import React from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) 
{
  const StartButton = (
    <div className="btn-grp">
        <button
            onClick={props.handleStart} data-testid="start">
        Start
        </button>
        <button data-testid="reset" disabled>
        Reset
        </button>
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      
        {props.isPaused ? <button  onClick={props.handlePauseResume} data-testid="resume">
        Resume
      </button> : <button  onClick={props.handlePauseResume} data-testid="pause">
        Pause
      </button>}
      
      <button  onClick={props.handleReset} data-testid="reset">
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