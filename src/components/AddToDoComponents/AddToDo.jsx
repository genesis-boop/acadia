import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function AddToDo() {
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");

  const handleChange = (event) => {
    setPriority(event.target.value);
    setTags(event.target.value);
  };

  return (
    <Stack direction="row" justifyContent="center">
      <Stack direction="column">
        <TextField
          id="task-title"
          label="Task Title"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="task-description"
          label="Task Details"
          multiline
          rows={4}
          fullWidth
        />
      </Stack>
      <Stack>
        <p>Due Date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        <Stack direction="row">
          <p>Priority</p>
          <FormControl>
            <Select
              labelId="task-priority"
              id="task-priority"
              value={priority}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value={10}>Low</MenuItem>
              <MenuItem value={20}>Medium</MenuItem>
              <MenuItem value={30}>High</MenuItem>
            </Select>
          </FormControl>
          <p>Tags</p>
          <FormControl>
            <Select
              labelId="task-tags"
              id="task-tags"
              value={tags}
              onChange={handleChange}
              displayEmpty
            ></Select>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AddToDo;
