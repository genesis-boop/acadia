import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "@fontsource/space-grotesk/500.css";
import "./DashboardComponent.css";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DashboardComponent() {
  const [greeting, setGreeting] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      setGreeting("☀️ GOOD MORNING, A BIG DAY AHEAD!");
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting("🌇 GOOD AFTERNOON, STAY SAFE!");
    } else {
      setGreeting("🌙 GOOD EVENING, TIME TO UNWIND!");
    }

    const getNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/notes");
        setNotes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, []);

  return (
    <Container className="mainDashboard">
      <Box className="mainDashboard-content">
        <Stack direction="column">
          <Card
            sx={{
              height: 150,
              width: 732,
              backgroundColor: "white",
              border: "5px solid black",
              padding: "20px 50px",
              borderRadius: "16px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "8px 8px 0px black",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 42,
                fontWeight: 600,

                // display: "flex",
                // justifyContent: "flex-start",
              }}
            >
              {greeting}
            </Typography>
          </Card>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 24,
              fontWeight: 500,
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
            alignItems="center"
            sx={{ maxWidth: 850 }}
            marginBottom="16px"
          >
            <Card
              sx={{
                height: 120,
                width: 400,
                backgroundColor: "#A388EE",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                border: "5px solid black",
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#C4A1FF",
                  boxShadow: "8px 8px 0px black",
                },
              }}
              component={Link}
              to="/add-todo"
            >
              <AddTaskRoundedIcon
                sx={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 24,
                  fontWeight: 600,
                  // display: "flex",
                  // justifyContent: "flex-start",
                }}
              >
                ADD A TASK
              </Typography>
            </Card>
            <Card
              sx={{
                height: 120,
                width: 400,
                backgroundColor: "#A7DBD8",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                border: "5px solid black",
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#BBE4DD",
                  boxShadow: "8px 8px 0px black",
                },
              }}
              component={Link}
              to="/notes"
            >
              <LibraryBooksRoundedIcon
                sx={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 24,
                  fontWeight: 600,
                  // display: "flex",
                  // justifyContent: "flex-start",
                }}
              >
                ADD A NOTE
              </Typography>
            </Card>
          </Stack>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 24,
              fontWeight: 500,
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
            {notes.slice(0, 2).map((note) => (
              <Card
                key={note.id}
                sx={{
                  height: 140,
                  width: 417,
                  backgroundColor: "#FCFD96",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "8px",
                  border: "5px solid black",
                  boxShadow: "8px 8px 0px black",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans, san-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {note.text}
                </Typography>
                <Chip label={note.date} />
              </Card>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default DashboardComponent;
