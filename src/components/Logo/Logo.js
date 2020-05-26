import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/images/Burger-Logo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img alt="MyBurger" src={burgerLogo} />
    </div>
  );
};

export default Logo;
