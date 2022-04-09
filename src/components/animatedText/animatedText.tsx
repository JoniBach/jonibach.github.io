import { Text, TextContainer } from "./animatedText-style";
import ProgressBar from "../progressBar/progressBar";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  translateWidth: any;
  data: any;
  bar: any;
  translateOpacity: any;
};

function AnimatedText({
  translateWidth,
  translateOpacity,
  data,
  bar,
}: AnimatedTextProps) {
  const startFade = translateWidth(0) / 100;
  const showStart = startFade < 0 ? 0 : startFade;

  const endFade = 0 - translateWidth(data.length - 1) / 100;
  const showEnd = endFade < 0 ? 0 : endFade;

  return (
    <TextContainer>
      <TextContainer>
        <motion.span
          animate={{
            opacity: showStart,
          }}
        >
          scroll to continue
        </motion.span>

        <motion.span
          animate={{
            opacity: showEnd,
          }}
        >
          fin
        </motion.span>

        {data.map((d: any, i: any) => (
          <Text
            animate={{
              x: `${translateWidth(i)}vw`,
            }}
            key={`${d.label}-${i}`}
            opacity={translateOpacity(i)}
          >
            <span>{d.label}</span>
            <ProgressBar bar={bar} />
            <span>{d.description}</span>
          </Text>
        ))}
      </TextContainer>
    </TextContainer>
  );
}

export default AnimatedText;
