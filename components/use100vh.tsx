import { useEffect, useState } from "react";

const use100vh = (): number | null => {
  const [height, setHeight] = useState<number | null>(measureHeight);
  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
  useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return;
    const setMeasuredHeight = () => {
      const measuredHeight = measureHeight();
      setHeight(measuredHeight);
    };
    window.addEventListener("resize", setMeasuredHeight);
    return () => window.removeEventListener("resize", setMeasuredHeight);
  }, [wasRenderedOnClientAtLeastOnce]);
  return wasRenderedOnClientAtLeastOnce ? height : null;
};

const measureHeight = (): number | null => {
  if (!isClient()) return null;
  return window.innerHeight;
};

const useWasRenderedOnClientAtLeastOnce = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (isClient()) {
      setState(true);
    }
  }, []);
  return state;
};

const isClient = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

export default use100vh;
