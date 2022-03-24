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
  const { scrollY } = useViewportScroll();
  const [pos, setPos] = useState<number>(0);

  const Nav = () => {
    let no = 0;
    scrollY.onChange((y) => {
      // y = scroll position
      // Do Something
      setPos(y);
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
      description: "I have been interviewed by BBC1... What was it for?",
    },
    {
      label: "Fact 5",
      description: "I did some work for an F1 team... Which one was it?",
    },
  ];

  // const getPosition = pos >== 300
  const newPos = (pos % 300) - 100;
  const updatedPos =
    newPos > 0 && newPos < 100 ? 0 : newPos > 100 ? newPos - 100 : newPos;
  const getIndex = Math.trunc(pos / 300);
  const fixedPos = pos - 1 * 3 * 100;
  const { height, width } = useWindowDimensions();
  console.log(pos, height * data.length);
  return (
    <div style={{ height: `${data.length * height}px` }}>
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
          <TextContainer>
            {data.map((d, i) => (
              <Text
                animate={{
                  x: `${
                    pos - i * 300 - 100 > 0 && pos - i * 300 - 100 < 100
                      ? 0
                      : pos - i * 300 - 100 > 100
                      ? pos - i * 300 - 100 - 100
                      : pos - i * 300 - 100
                  }vw`,
                }}
              >
                <span>{d.label}</span>
                <br />
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
