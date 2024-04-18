import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddNotesComponent.css";

function AddNotes() {
  const [noteText, setNoteText] = useState("");
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const newNote = {
      text: noteText,
      date: new Date().toLocaleDateString(),
    };

    try {
      await axios.post("http://localhost:8080/notes", newNote);
      setNoteText("");
      navigate("/");
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
              borderRadius: "4px",
              padding: "5px 10px 5px 10px",
              border: "3px solid black",
              // backgroundColor: "#7FBC8C",
              color: "black",
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 700,

              "&:hover": {
                // backgroundColor: "90EE90",
                boxShadow: "3px 3px 0px black",
                color: "white",
              },
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
