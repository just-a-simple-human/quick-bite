import React, { HTMLProps, useRef, useState } from "react";
import { AnimatePresence, stagger, Variants } from "motion/react";
import {
  ul as MotionUl,
  button as MotionButton,
  span as MotionSpan,
} from "motion/react-client";
import { useClickOutside } from "../helpers/use-click-outside";
import { ArrowDownSvg } from "../assets/icons";

interface IOption {
  name: string;
  id: number;
  [key: string]: unknown;
}

interface IProps {
  currentValue: IOption[];
  setValue: (value: IOption) => void;
  options: IOption[];
  placeholder: string;
}

function Select({ currentValue, setValue, options, placeholder }: IProps) {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpened(false));
  const listVars: Variants = {
    opened: {
      height: "fit-content",
      transition: {
        when: "beforeChildren",
        delayChildren: stagger(0.1, { from: "first" }),
      },
    },
    closed: {
      height: 0,
      transition: {
        when: "afterChildren",
        delayChildren: stagger(0.1, { from: "last" }),
      },
    },
  };
  const itemVars: Variants = {
    opened: { x: 0, opacity: 1 },
    closed: { x: "-10%", opacity: 0 },
  };

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-lg border border-stone-400"
    >
      <button
        className="w-full h-fit px-4 py-2 flex justify-between text-base text-stone-800"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {currentValue[0]
          ? currentValue.map((i) => i?.name).join(", ")
          : placeholder}
        <MotionSpan
          variants={{
            opened: { rotateX: 180, rotateY: 180 },
            closed: { rotateX: 360, rotateY: 360 },
          }}
          initial={"closed"}
          animate={isOpened ? "opened" : "closed"}
          transition={{ duration: 0.4 }}
        >
          <ArrowDownSvg className="**:fill" />
        </MotionSpan>
      </button>
      <AnimatePresence>
        {isOpened && (
          <MotionUl
            className="w-full overflow-clip bg-white"
            variants={listVars}
            initial="closed"
            animate="opened"
            exit="closed"
          >
            {options.map((item) => (
              <li className="border-t border-t-stone-400" key={item.id}>
                <MotionButton
                  className="w-full px-6 py-2 flex items-start text-base text-stone-800"
                  variants={itemVars}
                  onClick={() => {
                    setValue(item);
                    setIsOpened(false);
                  }}
                >
                  {item.name}
                </MotionButton>
              </li>
            ))}
          </MotionUl>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Select };
