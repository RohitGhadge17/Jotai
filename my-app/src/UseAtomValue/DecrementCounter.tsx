import { useAtomValue, useSetAtom } from 'jotai'
import React from 'react'
import { countAtom } from './IncrementCounter'

const DecrementCounter = () => {
    const setCount = useSetAtom(countAtom);
    const count = useAtomValue(countAtom);

    const Decrement = () => {
        setCount(count - 1);
    }
  return (
    <div>
        {/* <h2>Count : {count}</h2> */}
        <button onClick={Decrement}>Decrement-</button>
    </div>
  )
}

export default DecrementCounter