import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import './home.css';

// Create a custom Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7800', // Customize your primary color
    },
    secondary: {
      main: '#1976d2', // Customize your secondary color
    },
    background: {
      default: '#f5f5f5', // Lighter background for the page
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#FF7800',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '1.5rem',
      color: '#333',
    },
    button: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  },
});

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const events = ["Sports", "Marathon", "Startup"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This will reset and apply Material UI's baseline CSS */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: 3,
            width: '100%',
          }}
        >
          <Typography variant="h1" gutterBottom>
            Available Events
          </Typography>
          <Typography variant="h2" paragraph>
            Choose an event and register to participate!
          </Typography>
          {events.map((event) => (
            <Button
              key={event}
              onClick={() => navigate(`/register?event=${event}`)}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                margin: '15px 0',
                width: '100%',
                padding: '15px',
                fontSize: '1.2rem',
                borderRadius: '8px',
                boxShadow: 2,
                '&:hover': {
                  backgroundColor: '#e57700', // Darker hover effect
                },
              }}
            >
              {event}
            </Button>
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
