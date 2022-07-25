import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [togglePoems, setTogglePoems] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
      .then((r) => r.json())
      .then((poems) => setPoems(poems))
  },[])

  function PoemToggle () {
    setTogglePoems(!togglePoems)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={PoemToggle}>
          Show/hide new poem form
          </button>
        {togglePoems ? <NewPoemForm poems={poems} setPoems={setPoems} /> : null}
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems} />
    </div>
  );
}

export default App;
