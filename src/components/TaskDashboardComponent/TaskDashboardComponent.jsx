import Container from "@mui/material/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "./TaskDashboardComponent.css";
import { Typography } from "@mui/material";

function TaskDashboardComponent() {
  return (
    <Container className="taskDashboard">
      <Stack direction="column">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="taskDashboard-calendar"
            readOnly
            label="Today's Date"
          />
        </LocalizationProvider>
        <Typography>Tasks Today</Typography>
        <Card
          sx={{
            height: 80,
            width: "100%",
            backgroundColor: "white",
            marginBottom: 1,
            boxShadow: "4px 4px 5px rgba(0,0,0,0.2)",
            borderRadius: "12px",
          }}
        />
        <Card
          sx={{
            height: 80,
            width: "100%",
            backgroundColor: "white",
            marginBottom: 1,
            boxShadow: "4px 4px 5px rgba(0,0,0,0.2)",
            borderRadius: "12px",
          }}
        />
        <Card
          sx={{
            height: 80,
            width: "100%",
            backgroundColor: "white",
            marginBottom: 1,
            boxShadow: "4px 4px 5px rgba(0,0,0,0.2)",
            borderRadius: "12px",
          }}
        />
      </Stack>
    </Container>
  );
}

export default TaskDashboardComponent;
