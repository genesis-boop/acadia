import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./ToDoComponent.css";

function ToDo({ todo }) {
  const getChipColor = (tag) => {
    switch (tag) {
      case "Urgent":
        return "error";
      case "Home":
        return "warning";
      case "Work":
        return "info";
      case "School":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Card
      sx={{
        maxWidth: "auto",
        maxHeight: "auto",
        height: "90px",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "5px solid black",
        boxShadow: "3px 3px 0px black",
      }}
    >
      <div class="checkbox-wrapper-11">
        <input id={todo.id} type="checkbox" name="r" value="2" />
        <label for={todo.id}>{todo.title}</label>
      </div>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
        }}
      >
        {todo.tags ? (
          Array.isArray(todo.tags) ? ( // Check if tags is an array
            todo.tags.map((tag) => (
              <Chip label={tag} key={tag} color={getChipColor(tag)} />
            ))
          ) : (
            todo.tags
              .split(",")
              .map((tag) => (
                <Chip label={tag} key={tag} color={getChipColor(tag)} />
              ))
          )
        ) : (
          <></> // Or any other indicator
        )}
        <Chip label={"Due: " + todo.dueDate.slice(0, 10)} />
      </Stack>
    </Card>
  );
}

export default ToDo;
