import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/archivo/500.css";

function DashboardComponent() {
  return (
    <Container
      p={0}
      sx={{
        background:
          "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
        margin: "0",
        padding: "0",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        height={680}
        width={1200}
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap={4}
        p={0}
        sx={{ backgroundColor: "white" }}
        borderRadius={12}
      >
        <Stack direction="column">
          <Typography
            variant="h2"
            sx={{ fontFamily: "Bebas Neue, sans-serif" }}
            m={2}
          >
            👋 Hello, Welcome to your dashboard!
          </Typography>
          <Card
            sx={{
              height: 150,
              width: 1000,
              backgroundColor: "black",
            }}
          />
          <Typography
            variant="h4"
            sx={{ fontFamily: "Archivo, sans-serif" }}
            m={2}
          >
            Notes!
          </Typography>
          <Stack direction="row" gap={2}>
            <Card
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "black",
              }}
            />
            <Card
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "black",
              }}
            />
            <Card
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "black",
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default DashboardComponent;
