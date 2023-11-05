import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typer = (props: {
  words: string[];
  loop: number;
  typeSpeed?: number;
}) => {
  const [text] = useTypewriter({
    words: props.words,
    loop: props.loop,
    typeSpeed: props.typeSpeed,
  });

  return (
    <div className="text-purple-500 md:text-3xl">
      {text} <Cursor />
    </div>
  );
};

export default Typer;
