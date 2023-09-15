import React from "react"; 
import { Button } from "react-bootstrap";
import "./CommonButton.scss";

const CommonButton = (props) => {  
  return (
    <Button {...props} type="primary" disabled={props.disabled}>
      <img src={props.icon} className={`btn_icon ${props.btnicon}`} alt="icon"/>
      {props.title} <span className={`light_text ${props.textclass}`}>{props.text}</span>
    </Button>
  );
}; 

export default CommonButton; 
   