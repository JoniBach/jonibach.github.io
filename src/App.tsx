import { FC } from "react";
import Default from "./pages/default/default";
import styled from "styled-components";
import { motion } from "framer-motion";

const AppContainer = styled(motion.div)`
  background-image: linear-gradient(to bottom, #333344, #333344);
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
