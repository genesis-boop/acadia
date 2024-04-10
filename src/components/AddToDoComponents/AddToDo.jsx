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
import axios from "axios";

function AddToDo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");

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

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      tags,
    };

    try {
      const response = await axios.post("http://localhost:8080/todo", newTask);

      if (response.status === 201) {
        console.log("Task Saved Nice");
      } else {
        console.log("wuh woh", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack direction="row" spacing={3}>
      <Stack direction="column" spacing={2}>
        <TextField
          id="task-title"
          label="Task Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          required
        />
        <TextField
          id="task-description"
          label="Task Details"
          multiline
          rows={4}
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add New Task
        </Button>
      </Stack>
      <Stack>
        <p>Due Date</p>
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
          <FormControl></FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AddToDo;
