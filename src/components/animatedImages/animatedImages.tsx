import { Image, ImageContainer } from "./animatedImages-style";
import ProgressBar from "../progressBar/progressBar";
import { AnimatePresence } from "framer-motion";

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
  const show = translateOpacity(active) > 0;
  console.log(show);

  return (
    <ImageContainer>
      <ImageContainer>
        <AnimatePresence>
          {data[active]?.img && (
            <Image
              style={{ display: show ? "block" : "none" }}
              animate={{
                opacity: translateOpacity(active),
              }}
              src={data[active]?.img}
            />
          )}
        </AnimatePresence>
      </ImageContainer>
    </ImageContainer>
  );
}

export default AnimatedImages;
