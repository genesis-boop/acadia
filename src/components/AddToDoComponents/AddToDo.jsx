import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddToDo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagOptions, setTagOptions] = useState([
    "Work",
    "Home",
    "School",
    "Urgent",
  ]);

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDueDateChange = (newValue) => {
    setDueDate(newValue);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      tags: selectedTags,
    };

    try {
      const response = await axios.post("http://localhost:8080/todo", newTask);

      if (response.status === 201) {
        console.log("Task Saved Nice");
        navigate("/todo");
      } else {
        console.log("wuh woh", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <TextField
          id="task-title"
          label=""
          variant="standard"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          required
          InputProps={{ disableUnderline: true }}
          sx={{
            border: "5px solid black",
            borderRadius: "4px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            "&:hover": {
              boxShadow: "3px 3px 0px black",
            },
          }}
        />
        <TextField
          id="task-description"
          label=""
          variant="standard"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          InputProps={{ disableUnderline: true }}
          required
          sx={{
            border: "5px solid black",
            borderRadius: "8px",
            // height: "40px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            "&:hover": {
              boxShadow: "3px 3px 0px black",
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          sx={{
            border: "5px solid black",
            "&:hover": { boxShadow: "3px 3px 0px black" },
          }}
        >
          Add New Task
        </Button>
      </Stack>
      <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            label="Select Due Date"
            value={dueDate}
            onChange={handleDueDateChange}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
        <Stack direction="row">
          <p>Priority</p>
          <FormControl>
            <Select
              labelId="task-priority"
              id="task-priority"
              value={priority}
              onChange={handlePriorityChange}
              displayEmpty
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
          <p>Tags</p>
          <Autocomplete
            multiple
            id="tags-filled"
            options={tagOptions}
            freeSolo // Allows typing new tags
            value={selectedTags}
            onChange={(event, newTags) => {
              setSelectedTags(newTags);
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tags"
                placeholder="Add Tags..."
              />
            )}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AddToDo;
