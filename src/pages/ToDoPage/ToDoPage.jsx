import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ToDo from "../../components/ToDoComponent/ToDoComponent";
import axios from "axios";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Link } from "react-router-dom";
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
          YOUR TO DO'S
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "12px",
        }}
      >
        <Card
          sx={{
            width: "350px",
            height: "650px",
            backgroundColor: "#E3DFF2",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "5px solid black",
          }}
        >
          <Stack direction="row">
            <Typography
              sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 700 }}
            >
              LOW PRIORITY
            </Typography>
            <Typography
              sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 700 }}
            >
              {taskCounts.low}
            </Typography>
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
            backgroundColor: "#FDFD96",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "5px solid black",
          }}
        >
          <Stack direction="row">
            <Typography
              sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 700 }}
            >
              Medium Priority
            </Typography>
            <Typography
              sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 700 }}
            >
              {taskCounts.medium}
            </Typography>
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
            backgroundColor: "#FFA07A",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "5px solid black",
          }}
        >
          <Stack direction="row">
            <Typography
              sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 700 }}
            >
              High Priority
            </Typography>
            <Typography
              sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: 700 }}
            >
              {taskCounts.high}
            </Typography>
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
