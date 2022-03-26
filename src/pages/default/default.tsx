/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import logo from "./logo.svg";
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
  width: 100%;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled(motion.p)`
  position: absolute;
  width: 100%;
  max-width: 80vw;
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
  background-image: linear-gradient(to right, #00ffff, #00a2ff);
  height: 100%;
  /* box-shadow: 0 0 20px 20px cyan, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff; */
  box-shadow: #f0f 0px 3px 6px;
`;

const IconStyled = styled(motion.svg)`
  fill: none;
  stroke: #fff;
  stroke-width: 5px;
  position: fixed;
  overflow: visible;
`;

function Default() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [prog, setProg] = useState<number>(0);

  const Nav = () => {
    let no = 0;
    scrollYProgress.onChange((y) => {
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

  // const spinBase = baseP % (portion * 2);
  // const spin = spinBase > portion ? portion * 2 - spinBase : spinBase;
  // const finalSpin = ((spin * data.length) / 100) * 360;

  const pathVariants = {
    visible: {
      opacity: 1,
      pathLength: prog,
    },
  };

  const attrs = {
    initial: "visible",
    variants: pathVariants,
  };

  const IconPathStyled = styled(motion.rect).attrs(() => attrs)``;

  const translateWidth = (i: any) => {
    const index = i;

    const isEven = i % 2;

    const s2 = portion / 3;
    const s3 = s2 * 2;

    const p0 = portion * index;
    const p1 = p0 + portion;
    const p2 = p0 + s2;
    const p3 = p0 + s3;

    const a1 = p1 - portion;

    const d1 = mod * data.length * 3;

    const phase1 = baseP > a1 && baseP < p2;
    const phase2 = baseP > p2 && baseP < p3;
    const phase3 = baseP > p3 && baseP < p1;

    if (baseP >= p1) {
      if (isEven) {
        return "100";
      } else {
        return "-100";
      }
    }
    if (phase1) {
      if (isEven) {
        return `${d1 - 100}`;
      } else {
        return `${100 - d1}`;
      }
    }
    if (phase2) {
      return `${0}`;
    }
    if (phase3) {
      if (isEven) {
        return `${d1 - 200}`;
      } else {
        return `${200 - d1}`;
      }
    }

    if (isEven) {
      return "-100";
    } else {
      return "100";
    }
  };
  return (
    <>
      <IconStyled height="100%" width="100%">
        <defs>
          <linearGradient id="grd" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00ffff"></stop>
            <stop offset="100%" stop-color="#00a2ff"></stop>
          </linearGradient>
        </defs>
        <IconPathStyled
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            // fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
          width="100%"
          height="100%"
          stroke="url(#grd)"
        />
      </IconStyled>

      <div style={{ height: `400vh` }}>
        <Container className="App">
          <Content>
            {/* <motion.img
            animate={{ rotate: finalSpin }}
            src={logo}
            className="App-logo"
            alt="logo"
          /> */}
            {/* <motion.div animate={{opacity: 100}}>
              <p>
                Hey! The new 'about me' page is currently under development!
              </p>
              <p>
                While i work on that however, scroll to see some fun teasers
                about me!
              </p>
            </motion.div> */}

            <TextContainer>
              {data.map((d, i) => (
                <Text
                  animate={{
                    x: `${translateWidth(i)}vw`,
                  }}
                >
                  <span>{d.label}</span>
                  <BarContainer>
                    <Bar animate={{ width: `${bar}%` }} />
                  </BarContainer>
                  <span>{d.description}</span>
                </Text>
              ))}
            </TextContainer>
          </Content>
        </Container>
      </div>
    </>
  );
}

export default Default;
