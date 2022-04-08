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
  console.log(translateOpacity(active));
  return (
    <ImageContainer>
      <ImageContainer>
        {/* {data.map((d: any, i: any) => */}
        {data[active]?.img ? (
          <Image
            animate={{
              // y: `${translateWidth(i)}vh`,
              opacity: translateOpacity(active),
            }}
            src={data[active]?.img}
          />
        ) : (
          ""
        )}
        {/* )} */}
      </ImageContainer>
    </ImageContainer>
  );
}

export default AnimatedImages;
