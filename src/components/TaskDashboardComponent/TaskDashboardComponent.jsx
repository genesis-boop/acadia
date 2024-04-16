import Container from "@mui/material/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "./TaskDashboardComponent.css";
import { Typography } from "@mui/material";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/work-sans/400.css";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function TaskDashboardComponent() {
  const [tasks, setTasks] = useState([]);
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todo");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);

  const getChipColor = (tag) => {
    switch (tag) {
      case "Urgent":
        return "error";
      case "Home":
        return "warning";
      case "Work":
        return "info";
      case "School":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Container className="taskDashboard">
      <Stack direction="column">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 24,
            display: "flex",
            justifyContent: "flex-start",
            margin: "8px 8px 0 8px",
          }}
          m={2}
        >
          CALENDAR
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="taskDashboard-calendar"
            readOnly
            label="Today's Date"
            sx={{
              fontFamily: "Space Grotest, sans-serif",
            }}
          />
        </LocalizationProvider>
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
          TODAY'S TASKS
        </Typography>
        {tasks
          .filter((task) => task.dueDate.slice(0, 10) === today)
          .slice(0, 3)
          .map((task) => (
            <Link to={`/todo`} key={task.id} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  height: 90,
                  width: "100%",
                  backgroundColor: "white",
                  marginBottom: 1,
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
                  borderRadius: "12px",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans, san-serif",
                      fontSize: "18px",
                    }}
                  >
                    {task.title}
                  </Typography>
                  <ArrowOutwardRoundedIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                  }}
                >
                  {task.tags ? (
                    Array.isArray(task.tags) ? (
                      task.tags.map((tag) => (
                        <Chip label={tag} key={tag} color={getChipColor(tag)} />
                      ))
                    ) : (
                      task.tags
                        .split(",")
                        .map((tag) => (
                          <Chip
                            label={tag}
                            key={tag}
                            color={getChipColor(tag)}
                          />
                        ))
                    )
                  ) : (
                    <></>
                  )}
                </Stack>
              </Card>
            </Link>
          ))}
      </Stack>
    </Container>
  );
}

export default TaskDashboardComponent;
