import styled from "styled-components";
import { motion } from "framer-motion";
import { IconStyled } from "./progressBorder-style";
type ProgType = {
  progress: any;
};

function ProgressBorder({ progress }: ProgType) {
  const pathVariants = {
    visible: {
      opacity: 1,
      pathLength: progress,
    },
  };

  const attrs = {
    initial: "visible",
    variants: pathVariants,
  };

  const IconPathStyled = styled(motion.rect).attrs(() => attrs)``;

  return (
    <>
      <IconStyled height="100%" width="100%">
        <defs>
          <linearGradient id="grd" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00ffff"></stop>
            <stop offset="100%" stop-color="#00a2ff"></stop>
          </linearGradient>
        </defs>
        <IconPathStyled
          transition={{
            default: { duration: 2, ease: "easeInOut" },
          }}
          width="100%"
          height="100%"
          stroke="url(#grd)"
        />
      </IconStyled>
    </>
  );
}

export default ProgressBorder;
