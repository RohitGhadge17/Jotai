import { atom, useSetAtom } from "jotai";
import React from "react";

export const switchAtom = atom(false);

const SetTrueButton = () => {
  const setCount = useSetAtom(switchAtom);

  const setTrue = () => {
    setCount(true);
  };

  return (
    <div>
      <button onClick={setTrue}>Set True</button>
    </div>
  );
};

export default SetTrueButton;
