import { Container, Content } from "./default-style";
import ProgressBorder from "../../components/border/progressBorder";
import useContent from "../../contexts/content-context";
import AnimatedText from "../../components/animatedText/animatedText";

function Default() {
  const { progress, translateWidth, data, bar } = useContent();

  return (
    <>
      <ProgressBorder progress={progress} />
      <div style={{ height: `400vh` }}>
        <Container className="App">
          <Content>
            <AnimatedText
              translateWidth={translateWidth}
              data={data}
              bar={bar}
            />
          </Content>
        </Container>
      </div>
    </>
  );
}

export default Default;
