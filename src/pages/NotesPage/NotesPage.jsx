import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function NotesPage() {
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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <h1>Selected Notes</h1>
          </Grid>
          <Divider
            orientation="veritical"
            sx={{ height: "100%", borderColor: "black" }}
          />
          <Grid item xs={8}>
            <h1>Notes</h1>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default NotesPage;
