import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Background() {
  const Icon1 = styled.div``;
  const BackgroundContainer = styled.div`
    position: absolute;
    left: -100px;
    display: flex;
    gap: 60%;
    @media screen and (max-width: 768px) {
      scale: 0.7;
    }
  `;

  return (
    <BackgroundContainer>
      <motion.div
        initial={{ x: "-50vw" }}
        animate={{ x: "0", rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Icon1>
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            transform="scale(1)"
          >
            <polygon points="50,10 90,90 10,90" fill="#ff9a99" />
          </svg>
        </Icon1>
      </motion.div>
      <motion.div
        initial={{ x: "50vw" }}
        animate={{ x: "0", rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
    </BackgroundContainer>
  );
}
export default Background;
