import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import React from 'react';

const countAtom = atom(0);

const Counter = () => {

    // const setCount = useSetAtom(countAtom);
    // const count = useAtomValue(countAtom);

    /*Making use of useAtom hook*/
    const [count, setCount] = useAtom(countAtom);

    const Increment = () => {
        setCount(count + 1);
    }

  return (
    <div>
       <h2> count : {count}</h2>
       {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
       <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Counter