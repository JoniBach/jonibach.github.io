import { Image, ImageContainer } from "./animatedImages-style";
import ProgressBar from "../progressBar/progressBar";

type AnimatedImagesProps = {
  translateOpacity: any;
  data: any;
  bar: any;
  active: any;
};

function AnimatedImages({
  translateOpacity,
  data,
  bar,
  active,
}: AnimatedImagesProps) {
  return (
    <ImageContainer>
      <ImageContainer>
        {data[active]?.img ? (
          <Image
            animate={{
              opacity: translateOpacity(active),
            }}
            src={data[active]?.img}
          />
        ) : (
          ""
        )}
      </ImageContainer>
    </ImageContainer>
  );
}

export default AnimatedImages;
