import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Background() {
  const Icon1 = styled.div``;
  const Icon2 = styled.div``;
  const BackgroundContainer = styled.div`
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    display: flex;
    gap: 60%;
    margin-top: -60px;
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
            transform="scale(1.18)"
          >
            <polygon points="50,10 100,100 0,100" fill={"#ff9a99"} />
          </svg>
        </Icon1>
      </motion.div>
      <motion.div
        initial={{ x: "50vw" }}
        animate={{ x: "0", rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Icon2>
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            transform="scale(1.18) rotate(180, 0, 0)"
          >
            <polygon points="50,10 100,100 0,100" fill="#8cd3f7" />
          </svg>
        </Icon2>
      </motion.div>
    </BackgroundContainer>
  );
}
export default Background;
