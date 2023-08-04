import { useEffect, RefObject } from "react";

interface UseOnClickOutsideProps<T> {
  ref: RefObject<T>;
  exRef?: RefObject<T>;
  handler: (event: any) => void;
}

function useOnClickOutside<T extends HTMLElement = HTMLElement>({
  ref,
  exRef,
  handler,
}: UseOnClickOutsideProps<T>): void {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const el = ref?.current;
      const exp = exRef?.current;

      if (exp && exp.contains((event?.target as Node) || null)) return;

      if (!el || el.contains((event?.target as Node) || null)) return;

      handler(e);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, exRef, handler]);
}

export default useOnClickOutside;
