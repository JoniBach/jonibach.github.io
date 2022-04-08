import { useViewportScroll } from "framer-motion";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import content from "./content-data.json";

const { data } = content;

type contentContextType = {
  progress: any;
  translateWidth: any;
  translateOpacity: any;
  data: any;
  bar: any;
  active?: any;
};

const contentContextDefaultValues: contentContextType = {
  progress: undefined,
  translateWidth: undefined,
  translateOpacity: undefined,
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

  const active = Math.floor(baseP / portion);

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

  const translateOpacity = (i: any) => {
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
      return 0;
    }
    if (phase1) {
      return 0;
    }
    if (phase2) {
      return bar / 100;
    }
    if (phase3) {
      if (300 - d1 > 50) {
        return 1;
      } else {
        return ((300 - d1) / 100) * 2;
      }
    }

    return 0;
  };

  const value = {
    progress,
    translateWidth,
    data,
    bar,
    active,
    translateOpacity,
  };

  return (
    <>
      <ContentContext.Provider value={value}>
        {children}
      </ContentContext.Provider>
    </>
  );
}

export default useContent;
