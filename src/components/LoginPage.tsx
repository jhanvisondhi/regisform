import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Checkbox, FormControlLabel, Button, IconButton, Typography, Container, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs" sx={{ paddingTop: "3rem" }}>
      {/* Heading */}
      <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: "2rem" }}>
        Login Page
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Email address"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginBottom: "1rem" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
          <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
            Forgot password?
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onClick={() => navigate("/home")}
        >
          Sign in
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onClick={() => navigate("/home")}
        >
          Skip
        </Button>

        <Typography variant="body2" align="center" sx={{ marginBottom: "1rem" }}>
          Not a member? <Typography variant="body2" component="a" color="primary" sx={{ cursor: "pointer" }}>Register</Typography>
        </Typography>

        <Typography variant="body2" align="center" sx={{ marginBottom: "1rem" }}>
          or sign up with:
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <IconButton sx={{ color: "#1266f1" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "#1266f1" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#1266f1" }}>
            <GoogleIcon />
          </IconButton>
          <IconButton sx={{ color: "#1266f1" }}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
