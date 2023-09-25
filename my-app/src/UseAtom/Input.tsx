import { atom, useAtom } from "jotai";

// Create your atoms and derivatives
export const textAtom = atom("rohit"); //initial value
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

const Input = () => {
  const [text, setText] = useAtom(textAtom);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return <input type="text" value={text} onChange={handleChange} />;
};

export default Input;
