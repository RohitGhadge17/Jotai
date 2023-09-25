import { useSetAtom } from "jotai";
import React from "react";
import { switchAtom } from "./SetTrueButton";

const SetFalseButton = () => {
  const setCount = useSetAtom(switchAtom);

  const setFalse = () => {
    setCount(false);
  };
  return (
    <div>
      <button onClick={setFalse}>Set False</button>
    </div>
  );
};

export default SetFalseButton;
