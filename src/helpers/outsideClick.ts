import { useRef, useEffect } from "react";

export const useOutsideClick = (callback: () => void, mobileOpen?: Boolean) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        mobileOpen
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback, mobileOpen]);

  return ref;
};
