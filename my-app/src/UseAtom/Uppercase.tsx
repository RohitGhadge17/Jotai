import React from 'react';
import { useAtom } from "jotai";
import { uppercaseAtom } from './Input';


const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    return (
        <div>Uppercase  : {uppercase}</div>
    )
}

export default Uppercase;