import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "@fontsource/space-grotesk/500.css";
import "./DashboardComponent.css";
import { useState, useEffect } from "react";

function DashboardComponent() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      setGreeting("☀️ GOOD MORNING, A BIG DAY AHEAD!");
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting("🌇 GOOD AFTERNOON, STAY SAFE!");
    } else {
      setGreeting("🌙 GOOD EVENING, TIME TO UNWIND!");
    }
  }, []);

  return (
    <Container className="mainDashboard">
      <Box className="mainDashboard-content">
        <Stack direction="column">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 42,
              fontWeight: 500,
              display: "flex",
              justifyContent: "flex-start",
              margin: "8px",
            }}
            m={2}
          >
            {greeting}
          </Typography>
          <Card
            sx={{
              height: 200,
              width: 850,
              backgroundColor: "black",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 24,
              display: "flex",
              justifyContent: "flex-start",
              margin: "8px",
            }}
            m={2}
          >
            QUICK ACTIONS!
          </Typography>
          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            sx={{ maxWidth: 850 }}
            marginBottom="16px"
          >
            <Card
              sx={{
                height: 120,
                width: 272,
                backgroundColor: "black",
                borderRadius: "16px",
              }}
            />
            <Card
              sx={{
                height: 120,
                width: 272,
                backgroundColor: "black",
                borderRadius: "16px",
              }}
            />
            <Card
              sx={{
                height: 120,
                width: 272,
                backgroundColor: "black",
                borderRadius: "16px",
              }}
            />
          </Stack>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 24,
              display: "flex",
              justifyContent: "flex-start",
              margin: "8px",
            }}
            m={2}
          >
            YOUR NOTES!
          </Typography>
          <Stack
            direction="row"
            gap="16px"
            justifyContent="center"
            marginBottom="16px"
            sx={{ maxWidth: 850 }}
          >
            <Card
              sx={{
                height: 150,
                width: 417,
                backgroundColor: "black",
                borderRadius: "16px",
              }}
            />
            <Card
              sx={{
                height: 150,
                width: 417,
                backgroundColor: "black",
                borderRadius: "16px",
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default DashboardComponent;
