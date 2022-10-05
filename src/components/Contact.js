import React, { useState } from "react";

function Contact() {
  const [newData, setNewData] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  }
    function handleSubmit(event) {
      event.preventDefault();
      fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      })
        .then((response) => response.json())
        .then((data) => {
          const newContactData = [...newData, data];
          setNewData(newContactData);
        });
     
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="enter your name"
          name="name"
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="enter your email"
          name="email"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="enter your number"
          name="phoneno"
        />
        <textarea onChange={handleChange} type="text" name="message" />
        <input type="submit" placeholder="message me" />
      </form>
    </div>
  );
}

export default Contact;
