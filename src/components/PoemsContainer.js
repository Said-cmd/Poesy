import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems, setPoems }) {
  const poemList = poems.map((poem) => {
      return <Poem 
      poems={poems}
      setPoems={setPoems}
      key={poem.id}
      title={poem.title}
      content={poem.content}
      author={poem.author}
      id={poem.id}
      />
  })
  return (
    <div className="poems-container">
     {poemList}
    </div>
  );
}

export default PoemsContainer;
