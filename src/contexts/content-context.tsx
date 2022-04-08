import { useViewportScroll } from "framer-motion";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type contentContextType = {
  progress: any;
  translateWidth: any;
  data: any;
  bar: any;
};

const contentContextDefaultValues: contentContextType = {
  progress: undefined,
  translateWidth: undefined,
  data: undefined,
  bar: undefined,
};

const ContentContext = createContext<contentContextType>(
  contentContextDefaultValues
);

export const useContent = () => useContext(ContentContext);

type Props = {
  children: ReactNode;
};

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
    description: "I have recenty been interviewed by BBC1... What was it for?",
  },
  {
    label: "Fact 5",
    description: "I did some work for an F1 team... Which one was it?",
  },
];

export function ContentProvider({ children }: Props) {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [progress, setProg] = useState<number>(0);

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

  const portion = 100 / data.length;
  const baseP = progress * 100;
  const mod = baseP % portion;

  const preBar = mod * data.length * 3 - 100;
  const bar = preBar < 0 ? 0 : preBar > 100 ? 100 : preBar;

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

  const value = { progress, translateWidth, data, bar };

  return (
    <>
      <ContentContext.Provider value={value}>
        {children}
      </ContentContext.Provider>
    </>
  );
}

export default useContent;
