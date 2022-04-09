import styled from "styled-components";
import { motion } from "framer-motion";

export const BarContainer = styled(motion.div)`
  width: 100%;
  height: 5px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: rgb(0, 0, 0) 1px 1px 2px 0px inset,
    rgba(17, 17, 17, 0.3) -1px -1px 2px 0px inset;
`;
export const Bar = styled(motion.div)`
  background: cyan;
  background-image: linear-gradient(to right, #00ffff, #00a2ff);
  height: 100%;
  /* box-shadow: 0 0 20px 20px cyan, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff; */
  box-shadow: #f0f 0px 3px 6px;
`;
