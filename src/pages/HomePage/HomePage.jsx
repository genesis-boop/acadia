import PermanentDrawerLeft from "../../components/DrawerComponent/DrawerComponent";
import DashboardComponent from "../../components/DashboardComponent/DashboardComponent";
import Stack from "@mui/material/Stack";

function HomePage() {
  return (
    <Stack direction="row">
      <PermanentDrawerLeft />
      <DashboardComponent />
    </Stack>
  );
}

export default HomePage;
