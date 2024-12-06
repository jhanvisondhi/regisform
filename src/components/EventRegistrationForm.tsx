import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Container, TextField, Typography, Box, Card, CardContent } from "@mui/material";
import './regi.css';

const EventRegistrationForm: React.FC = () => {
  const location = useLocation();
  const eventName = new URLSearchParams(location.search).get("event");

  // Validate if the event name is passed from the query parameters
  if (!eventName) {
    alert("Event name is required.");
    return;
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    imageUrl: "",
    message: "",
  });

  const [submissions, setSubmissions] = useState<any[]>([]);  // To store submitted form data

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.eventDate || !eventName) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Send form data along with eventName to backend
      const response = await axios.post("http://localhost:5000/register", { ...formData, eventName });
      alert("Registration successful!");

      // Reset the form fields
      setFormData({
        name: "",
        email: "",
        eventDate: "",
        imageUrl: "",
        message: "",
      });

      // Add the new submission to the list of submissions
      setSubmissions([
        ...submissions,
        {
          name: formData.name,
          email: formData.email,
          eventDate: formData.eventDate,
          imageUrl: formData.imageUrl,
          message: formData.message,
        }
      ]);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Register for {eventName}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={formData.name}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            fullWidth
            onChange={handleChange}
            value={formData.email}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Event Date"
            name="eventDate"
            variant="outlined"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            value={formData.eventDate}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Image URL"
            name="imageUrl"
            variant="outlined"
            type="text"
            fullWidth
            onChange={handleChange}
            value={formData.imageUrl}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Message (optional)"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            onChange={handleChange}
            value={formData.message}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>

      {/* Display Submitted Data Below the Form */}
      {submissions.length > 0 && (
        <Box sx={{ marginTop: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Registrations:
          </Typography>
          {submissions.map((submission, index) => (
            <Card key={index} sx={{ marginBottom: "1rem" }}>
              <CardContent>
                <Typography variant="h6">Name: {submission.name}</Typography>
                <Typography variant="body1">Email: {submission.email}</Typography>
                <Typography variant="body1">Event Date: {submission.eventDate}</Typography>
                {submission.imageUrl && (
                  <Typography variant="body2">Image URL: {submission.imageUrl}</Typography>
                )}
                {submission.message && (
                  <Typography variant="body2">Message: {submission.message}</Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default EventRegistrationForm;
