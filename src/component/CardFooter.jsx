import React from "react";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg"

const CardFooter = () => {
  const icons = [twitter, facebook, instagram, github];

  return (
    <div className='card--footer'>
      {icons.map((icon, index) => (
        <img key={index} src={icon} alt={`image${index}`} />
      ))}
    </div>
  );
};

export default CardFooter;
