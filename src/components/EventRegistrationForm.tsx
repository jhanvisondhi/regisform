import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const EventRegistrationForm: React.FC = () => {
  const location = useLocation();
  const eventName = new URLSearchParams(location.search).get("event");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    imageUrl: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", { ...formData, eventName });
      alert("Registration successful!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register for {eventName}</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="date" name="eventDate" onChange={handleChange} required />
      <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <textarea name="message" placeholder="Message (optional)" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventRegistrationForm;
