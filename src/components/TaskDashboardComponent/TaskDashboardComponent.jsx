import Container from "@mui/material/Container";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function TaskDashboardComponent() {
  return (
    <Container
      p={0}
      sx={{
        background:
          "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
        margin: "0",
        padding: "0",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar readOnly label="Today's Date" />
      </LocalizationProvider>
    </Container>
  );
}

export default TaskDashboardComponent;
