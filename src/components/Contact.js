import React, { useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
    console.log(contact);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/contact", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body:JSON.stringify(contact)
    })
    .then(res=>res.json())
    .then((data)=>{
        const newMessage=[...contact, data]
        setContact(newMessage)
    })
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
          name="number"
        />
        <textarea onChange={handleChange} type="text" name="message" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
