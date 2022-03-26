import { FC } from "react";
import Default from "./pages/default/default";
import styled from "styled-components";
import { motion } from "framer-motion";
const AppContainer = styled(motion.div)`
  /* background: #333344; */
  background-image: linear-gradient(to bottom, #333344, #333344);
  /* background-image: url(https://c8.alamy.com/comp/2G22KEG/90s-and-80s-style-seamless-pattern-background-wallpaper-2G22KEG.jpg); */
  /* background-repeat: no-repeat; */
  /* background-size: 100%; */

  position: relative;
`;

type Props = {};

const App: FC<Props> = () => {
  return (
    <AppContainer>
      <Default />
    </AppContainer>
  );
};

export default App;
