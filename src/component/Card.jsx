import React from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const card = () => {
  return (
    <div className='card'>
      <div className='card--cover-image'></div>
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default card;
