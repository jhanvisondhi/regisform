import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const events = ["Sports", "Marathon", "Startup"];

  return (
    <div>
      <h1>Available Events</h1>
      {events.map((event) => (
        <button key={event} onClick={() => navigate(`/register?event=${event}`)}>
          {event}
        </button>
      ))}
    </div>
  );
};

export default HomePage;
