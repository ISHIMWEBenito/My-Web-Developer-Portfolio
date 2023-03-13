/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  const HandleClick = (event) => {
    const allWithClass = Array.from(
      document.querySelectorAll(".navigation .icon")
    );

    allWithClass.forEach((element) => {
      element.classList.remove("active-nav");
    });
    event.currentTarget.classList.add("active-nav");
  };

  return (
    <div className='navigation'>
      <a href='#home'>
        <AiOutlineHome className='icon active-nav' onClick={HandleClick} />
      </a>
      <a href='#about'>
        <AiOutlineUser className='icon' onClick={HandleClick} />
      </a>
      <a href='#members'>
        <TiGroupOutline className='icon' onClick={HandleClick} />
      </a>
      <a href='#contact'>
        <BiMessageRoundedDots className='icon' onClick={HandleClick} />
      </a>
      <a href='#footer'>
        <BsArrowDownCircle className='icon' onClick={HandleClick} />
      </a>
    </div>
  );
}

export default Navbar;
