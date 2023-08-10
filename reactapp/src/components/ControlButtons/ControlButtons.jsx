import React , { useRef } from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) 
{
  const StartButton = (
    <div className="btn-grp">
        <div className="btn btn-one btn-start"
            onClick={props.handleStart} data-testid="start">
        Start
        </div>
        <div className="btn btn-two" disabled data-testid="reset">
        Reset
        </div>
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      
        {props.isPaused ? <div className="btn btn-two" onClick={props.handlePauseResume} data-testid="resume">
        Resume
      </div> : <div className="btn btn-two" onClick={props.handlePauseResume} data-testid="pause">
        Pause
      </div>}
      
      <div className="btn btn-two" onClick={props.handleReset} data-testid="reset">
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