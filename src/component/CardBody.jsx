import React from "react";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/Mail.svg";
import Button from "./Button";
import Intro from "./Intro";

const CardBody = () => {
  return (
    <div className='card--body'>
      <div className='card--about'>
        <h3>Zaky Irwansyah A</h3>
        <span>As Software Engineer</span>
        <span>zakyandhika.io</span>
      </div>
      <div className='button-group'>
        <Button icon={mail} text='Email' bgButton='btn btn-light' />
        <Button icon={linkedin} text='LinkedIn' bgButton='btn btn-blue' />
      </div>
      <Intro />
    </div>
  );
};

export default CardBody;
