import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  opacity: any;
}

const processTone = (tone: number, bound: number) => {
  if (tone < 0) {
    return 0;
  }
  if (tone > 0) {
    if (tone < bound) {
      return tone;
    }
    if (tone > bound) {
      return bound;
    }
  }
  return 0;
};

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled(motion.div)<Props>`
  position: absolute;
  width: 100%;
  max-width: 80vw;
  background-color: rgba(
    0,
    0,
    0,
    ${({ opacity }) => processTone(opacity, 0.8)}
  );
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, ${({ opacity }) => processTone(opacity, 0.4)}) 0px
      2px 4px,
    rgba(0, 0, 0, ${({ opacity }) => processTone(opacity, 0.3)}) 0px 7px 13px -3px,
    rgba(0, 0, 0, ${({ opacity }) => processTone(opacity, 0.3)}) 0px -3px 0px inset;
  padding: 10px;
`;
