import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ToDo from "../../components/ToDoComponent/ToDoComponent";
import axios from "axios";
import { useState, useEffect } from "react";

function ToDoPage() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const getToDos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todo");
        setToDoList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getToDos();
  }, []);

  const taskCounts = {
    low: toDoList.filter((todo) => todo.priority === 1).length,
    medium: toDoList.filter((todo) => todo.priority === 2).length,
    high: toDoList.filter((todo) => todo.priority === 3).length,
  };

  return (
    <Container>
      <Typography>To Do lists</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          sx={{
            width: "350px",
            height: "650px",
            backgroundColor: "#E4E4E4",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Stack direction="row">
            <Typography>Low Priority</Typography>
            <Typography>{taskCounts.low}</Typography>
          </Stack>
          {toDoList
            .filter((todo) => todo.priority === 1)
            .map((todo) => (
              <ToDo key={todo.id} todo={todo} />
            ))}
        </Card>
        <Card
          sx={{
            width: "350px",
            height: "650px",
            backgroundColor: "#E4E4E4",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Stack direction="row">
            <Typography>Medium Priority</Typography>
            <Typography>{taskCounts.medium}</Typography>
          </Stack>
          {toDoList
            .filter((todo) => todo.priority === 2)
            .map((todo) => (
              <ToDo key={todo.id} todo={todo} />
            ))}
        </Card>
        <Card
          sx={{
            width: "350px",
            height: "650px",
            backgroundColor: "#E4E4E4",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Stack direction="row">
            <Typography>High Priority</Typography>
            <Typography>{taskCounts.high}</Typography>
          </Stack>
          {toDoList
            .filter((todo) => todo.priority === 3)
            .map((todo) => (
              <ToDo key={todo.id} todo={todo} />
            ))}
        </Card>
      </Box>
    </Container>
  );
}

export default ToDoPage;
