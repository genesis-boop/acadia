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

function TaskDashboardComponent() {
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
        <Card
          sx={{
            height: 80,
            width: "100%",
            backgroundColor: "white",
            marginBottom: 1,
            boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
            borderRadius: "12px",
          }}
        />
        <Card
          sx={{
            height: 80,
            width: "100%",
            backgroundColor: "white",
            marginBottom: 1,
            boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
            borderRadius: "12px",
          }}
        />
        <Card
          sx={{
            height: 80,
            width: "100%",
            backgroundColor: "white",
            marginBottom: 1,
            boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
            borderRadius: "12px",
          }}
        />
      </Stack>
    </Container>
  );
}

export default TaskDashboardComponent;
