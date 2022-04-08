import { FC } from "react";
import Default from "./pages/default/default";
import styled from "styled-components";
import { motion } from "framer-motion";
import useContent from "./contexts/content-context";
import AnimatedImages from "./components/animatedImages/animatedImages";

const AppContainer = styled(motion.div)`
  background-image: linear-gradient(to bottom, #333344, #333344);
  position: relative;
`;

// const BG = styled(motion.img)`
//   position: fixed;
//   height: 100vh;
// `;

const BG = styled(motion.img)`
  position: fixed;
  height: 100vh;
`;

type Props = {};

const App: FC<Props> = () => {
  const { progress, translateWidth, data, bar } = useContent();

  return (
    <AppContainer>
      {/* <BG
        animate={{
          x: `-${progress * 100}%`,
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Khantia-Mansia_banner_Forest_at_Yuganski_Nature_Reserve.jpg"
      /> */}
      <Default />
    </AppContainer>
  );
};

export default App;
