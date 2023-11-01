import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typer = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Software Engineere", "Nextjs Engn."],
    loop: 0,
  });

  return (
    <div>
      {text} <Cursor />
    </div>
  );
};

export default Typer;
