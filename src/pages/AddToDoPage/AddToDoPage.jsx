import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddToDo from "../../components/AddToDoComponents/AddToDo";

function AddToDoPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box
        height={620}
        width={1200}
        my={4}
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
        borderRadius={2}
      >
        <h1>Create a New Task</h1>
        <AddToDo />
      </Box>
    </Grid>
  );
}

export default AddToDoPage;
