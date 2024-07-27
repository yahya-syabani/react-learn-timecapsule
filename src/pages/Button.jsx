import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mainIcon from "../assets/Mouse.png"; // Replace with the path to your PNG

const ScrollButton = styled.img`
  position: fixed;
  bottom: 90px;
  width: 35px;
  height: 50px;
  border: none;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 10000;
  scale: 1.2;
`;

const ScrollByPixelsButton = ({ scrollAmount }) => {
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleScroll = () => {
    // Check if the bottom of the page is reached
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    setButtonVisible(!isBottom);
  };

  const scrollDown = () => {
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollButton
      onClick={scrollDown}
      show={buttonVisible}
      src={mainIcon}
    ></ScrollButton>
  );
};

export default ScrollByPixelsButton;
