import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  .App-logo {
    width: 500px;
  }

  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Content = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

export const Backgorund = styled(motion.div)`
  background-image: url(images/background.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
