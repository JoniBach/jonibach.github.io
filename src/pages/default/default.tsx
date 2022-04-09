import { Container, Content } from "./default-style";
import ProgressBorder from "../../components/progressBorder/progressBorder";
import useContent from "../../contexts/content-context";
import AnimatedText from "../../components/animatedText/animatedText";
import AnimatedImages from "../../components/animatedImages/animatedImages";

function Default() {
  const { progress, translateWidth, translateOpacity, data, bar, active } =
    useContent();
  const pace = 100 * data?.length;
  return (
    <>
      <ProgressBorder progress={progress} />
      <div style={{ height: `${pace}vh` }}>
        <Container className="App">
          <Content>
            <AnimatedImages
              translateOpacity={translateOpacity}
              data={data}
              bar={bar}
              active={active}
            />
          </Content>
          <Content>
            <AnimatedText
              translateWidth={translateWidth}
              translateOpacity={translateOpacity}
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
