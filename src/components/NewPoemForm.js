import React, { useState } from "react";

function NewPoemForm ({ poems, setPoems }) {
    const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  })
  
    function handleOnChange(e) {
      let name = e.target.name
      let value = e.target.value
      setFormData ({  
        ...formData, [name]: value
      }); 
    }
  
    function handleSubmit(e){
      e.preventDefault()
      fetch("http://localhost:8004/poems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then((r) => r.json())
        .then((data) => {
        const newPoemData = [...poems, data] 
        setPoems(newPoemData)
        })
    }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Title"
      name="title" 
      onChange={handleOnChange}
      />
      <input
      type="text" 
      placeholder="Author"
      name="author"
      onChange={handleOnChange} 
      />
      <textarea 
      type="text"
      placeholder="Write your masterpiece here..." 
      name="content"
      rows={10} 
      onChange={handleOnChange}
      />
      <input 
      type="submit" 
      value="Share your masterpiece" 
      />
    </form>
  );
}

export default NewPoemForm;
