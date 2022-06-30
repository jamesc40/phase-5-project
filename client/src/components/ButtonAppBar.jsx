import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar({ handleLogout, isLoggedin }) {
  const history = useHistory();

  const handleLogoutClick = async () => {
    let req = await fetch("/logout", {
      method: "DELETE",
    });
    handleLogout();
    history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography
              href="/event-page"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Dates
            </Typography>

            {!isLoggedin ? (
              <>
                <Button color="inherit" href="/login">
                  Login
                </Button>

                <Button color="inherit" href="/signup">
                  Sign Up
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={handleLogoutClick}>
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
