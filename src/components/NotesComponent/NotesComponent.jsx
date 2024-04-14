import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import "./NotesComponent.css";

function NotesComponent() {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ display: "flex", justifyContent: "flex-start" }}>
          Hello This is my first note!
        </Typography>
        <Stack direction="row">
          <Typography>14/04/2024</Typography>
          <DeleteForeverRoundedIcon />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default NotesComponent;
