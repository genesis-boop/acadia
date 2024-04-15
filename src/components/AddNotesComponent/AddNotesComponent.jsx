import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "./AddNotesComponent.css";

function AddNotes() {
  const [noteText, setNoteText] = useState("");

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSave = async (props) => {
    const newNote = {
      text: noteText,
      date: new Date().toLocaleDateString(),
    };

    try {
      const response = await axios.post("http://localhost:8080/notes", newNote);
      const noteWithId = response.data;

      props.onSaveNote(noteWithId);
      setNoteText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="new" sx={{ maxWidth: 275 }}>
      <CardContent>
        <TextField
          id="newNote"
          label="Add New Note"
          multiline
          rows={4}
          cols={10}
          variant="standard"
          value={noteText}
          onChange={handleTextChange}
          sx={{
            border: "none",
            resize: "none",
          }}
        />
        <Stack direction="row">
          <Typography>200 remaning</Typography>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              border: "none",
              borderRadius: "24px",
              padding: "5px 10px 5px 10px",
            }}
          >
            Save
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AddNotes;
