import { atom, useAtomValue, useSetAtom } from 'jotai';
import React from 'react';

export const countAtom = atom(0);

const IncrementCounter = () => {
    const setCount = useSetAtom(countAtom);
    const count = useAtomValue(countAtom);

    const Increment = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <button onClick={Increment}>Add+</button>
    </div>
  )
}

export default IncrementCounter