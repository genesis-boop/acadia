import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NotesComponent from "../../components/NotesComponent/NotesComponent";
import Grid from "@mui/material/Grid";
function NotesPage() {
  return (
    <Container>
      <Box>
        <Typography>Notes</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <NotesComponent />
            <NotesComponent />
            <NotesComponent />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default NotesPage;
