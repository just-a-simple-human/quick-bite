"use client";
import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T | null>(null);
  const handler = (event: MouseEvent) => {
    if (
      ref.current &&
      ref.current !== event.currentTarget &&
      !ref.current.contains(event.target as Node)
    ) {
      callback();
    }
  };
  useEffect(() => {
    window && window.addEventListener("click", handler, { passive: true });
    return () => window && window.removeEventListener("click", handler);
  }, [ref]);
  return ref;
}
