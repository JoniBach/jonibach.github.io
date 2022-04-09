import { Text, TextContainer } from "./animatedText-style";
import ProgressBar from "../progressBar/progressBar";

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
  return (
    <TextContainer>
      <TextContainer>
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
