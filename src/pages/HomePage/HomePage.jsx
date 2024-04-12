import PermanentDrawerLeft from "../../components/DrawerComponent/DrawerComponent";
import DashboardComponent from "../../components/DashboardComponent/DashboardComponent";
import TaskDashboardComponent from "../../components/TaskDashboardComponent/TaskDashboardComponent";
import Stack from "@mui/material/Stack";

function HomePage() {
  return (
    <Stack direction="row">
      <PermanentDrawerLeft />
      <DashboardComponent />
      <TaskDashboardComponent />
    </Stack>
  );
}

export default HomePage;
