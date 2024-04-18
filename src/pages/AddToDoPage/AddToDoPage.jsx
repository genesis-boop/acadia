import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
        sx={{
          height: "600px",
          width: "700px",
          padding: "8px",
          border: "5px solid black",
          borderRadius: "8px",
          boxShadow: "8px 8px 0px black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "32px",
            fontWeight: 500,
          }}
        >
          CREATE A NEW TASK
        </Typography>
        <AddToDo />
      </Box>
    </Grid>
  );
}

export default AddToDoPage;
