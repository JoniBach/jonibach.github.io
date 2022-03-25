import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  .App-logo {
    width: 500px;
  }

  font-size: calc(10px + 2vmin);
  color: white;
`;

const Content = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const TextContainer = styled(motion.div)``;
const Text = styled(motion.p)`
  position: absolute;
  width: 100%;
`;
const BarContainer = styled(motion.div)`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: rgb(0, 0, 0) 1px 1px 2px 0px inset,
    rgba(17, 17, 17, 0.3) -1px -1px 2px 0px inset;
`;
const Bar = styled(motion.div)`
  background: cyan;
  height: 100%;
  /* box-shadow: 0 0 20px 20px cyan, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff; */
  box-shadow: #f0f 0px 3px 6px;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Default() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [pos, setPos] = useState<number>(0);
  const [prog, setProg] = useState<number>(0);

  const Nav = () => {
    let no = 0;
    scrollY.onChange((y) => {
      // y = scroll position
      // Do Something
      setPos(y);
    });
    scrollYProgress.onChange((y) => {
      // y = scroll position
      // Do Something
      setProg(y);
    });

    return no;
  };

  useEffect(() => {
    Nav();
  }, [scrollY]);

  const data = [
    {
      label: "Fact 1",
      description:
        "I once appeared on Britains Got Tallent...  What was i doing?",
    },
    {
      label: "Fact 2",
      description: "I have played 3 instraments... What could they be?",
    },
    {
      label: "Fact 3",
      description:
        "I have been featured in many exhibitions... What art do I make?",
    },
    {
      label: "Fact 4",
      description:
        "I have recenty been interviewed by BBC1... What was it for?",
    },
    {
      label: "Fact 5",
      description: "I did some work for an F1 team... Which one was it?",
    },
  ];

  const portion = 100 / data.length;
  const baseP = prog * 100;

  const mod = baseP % portion;

  const preBar = mod * data.length * 3 - 100;
  const bar = preBar < 0 ? 0 : preBar > 100 ? 100 : preBar;

  const translateWidth = (i: any) => {
    const index = i;

    const s2 = portion / 3;
    const s3 = s2 * 2;

    const p0 = portion * index;
    const p1 = p0 + portion;
    const p2 = p0 + s2;
    const p3 = p0 + s3;

    const a1 = p1 - portion;

    const d1 = mod * data.length * 3;

    if (baseP >= p1) {
      return "100vw";
    }
    if (baseP > a1 && baseP < p2) {
      return `${d1 - 100}vw`;
    }
    if (baseP > p2 && baseP < p3) {
      return `${0}vw`;
    }
    if (baseP > p3 && baseP < p1) {
      return `${d1 - 200}vw`;
    }

    return "-100vw";
  };

  return (
    <div style={{ height: `400vh` }}>
      <Container className="App">
        <Content>
          <motion.img
            animate={{ rotate: pos }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>Hey! The new 'about me' page is currently under development!</p>
          <p>
            While i work on that however, scroll to see some fun teasers about
            me!
          </p>
          {/* {pos} & {newPos} & {getIndex} & {updatedPos} & {fixedPos} */}
          {/* {baseP} & {baseP % portion} & {initPos} */}
          {/* {bar} */}
          <TextContainer>
            {data.map((d, i) => (
              <Text
                animate={{
                  x: translateWidth(i),
                }}
              >
                <span>{d.label}</span>
                <BarContainer>
                  <Bar animate={{ width: `${bar}%` }} />
                </BarContainer>
                <span>{d.description}</span>
              </Text>
            ))}
            {/* <Text animate={{ x: `${updatedPos}vw` }}>
              <span>{data[getIndex].label}</span>
              <br />
              <span>{data[getIndex].description}</span>
            </Text> */}
          </TextContainer>
        </Content>
      </Container>
    </div>
  );
}

export default Default;
