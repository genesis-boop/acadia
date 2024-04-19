import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NotesComponent from "../../components/NotesComponent/NotesComponent";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useState, useEffect } from "react";
import AddNotes from "../../components/AddNotesComponent/AddNotesComponent";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/notes");
        setNotes(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getNotes();
  }, []);

  return (
    <Container>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Link to="/">
          <ArrowBackIosRoundedIcon sx={{ color: "black" }} />
        </Link>
        <Typography
          sx={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          YOUR NOTES
        </Typography>
      </Stack>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {error && <p>Error fetching notes: {error.message}</p>}
          {notes.map((note) => (
            <Grid item xs={2} sm={4} md={4} key={note.id}>
              <NotesComponent note={note} />
            </Grid>
          ))}
          <Grid item xs={2} sm={4} md={4}>
            <AddNotes setNotes={setNotes}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default NotesPage;
