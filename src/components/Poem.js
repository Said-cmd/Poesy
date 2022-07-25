import React, { useState } from "react";

function Poem({ title, content, author, id, poems, setPoems }) {
  const [isRead, setIsRead] = useState(false);

  function handleDeletePoem() {
    fetch(` http://localhost:8004/poems/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => {
      const currentPoems = poems.filter((poem) => {
        return poem.id !== id
      }) 
      setPoems(currentPoems)
    })
  }

  function handleIsRead() {
    setIsRead(!isRead);
  }

  return (
    <div>
      <h3>{ title }</h3>
      <p>{ content }</p>
      <p>
        <strong>- By { author }</strong>
      </p>
      <button onClick={handleIsRead}>Mark as {isRead ? "unread" : "read" }</button>
      <button style={{background: "red", marginLeft: "15px", float: "right"}} onClick={handleDeletePoem}>Delete this poem</button>
    </div>
  );
}

export default Poem;
