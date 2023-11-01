import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const typer = () => {
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

export default typer;
