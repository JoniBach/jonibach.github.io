import styled from "styled-components";
import { motion } from "framer-motion";

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled(motion.p)`
  position: absolute;
  width: 100%;
  max-width: 80vw;
`;
