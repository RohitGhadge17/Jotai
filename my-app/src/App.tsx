import React, { Suspense } from "react";
import "./App.css";
import Input from "./UseAtom/Input";
import Uppercase from "./UseAtom/Uppercase";
import Controls from "./Suspense/Controls";
import UserName from "./Suspense/UserName";
import Counter from "./UseAtomValue/Counter";
import { useAtomValue } from "jotai";
import SetTrueButton, { switchAtom } from "./UseSetAtom/SetTrueButton";
import SetFalseButton from "./UseSetAtom/SetFalseButton";
import IncrementCounter, { countAtom } from "./UseAtomValue/IncrementCounter";
import DecrementCounter from "./UseAtomValue/DecrementCounter";

function App() {
  const state = useAtomValue(switchAtom);
  const count = useAtomValue(countAtom);
  return (
    <div className="App">
      {/* <Input />
     <Uppercase /> */}
      {/* <Controls />
     <Suspense fallback="Loading...">
        <UserName />
     </Suspense> */}
      <div>
        {/* <Counter /> */}
        <h2>Count : {count}</h2>
        <IncrementCounter />
        <DecrementCounter />
      </div>

      {/* <div>
      State: <b>{state.toString()}</b>
      <SetTrueButton />
      <SetFalseButton />
    </div> */}
    </div>
  );
}

export default App;
