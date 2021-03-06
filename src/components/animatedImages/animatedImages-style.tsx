import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageContainer = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Image = styled(motion.img)`
  min-height: 100vh;
  min-width: 100vw;
  opacity: 0;
`;
