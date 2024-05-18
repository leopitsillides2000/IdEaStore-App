import { A } from "@solidjs/router";
import MenuIcon from "@suid/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@suid/material";

export default function LoginAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <A href="/">
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "white" }}
            >
              IdEaStore
            </IconButton>
          </A>
          <Box sx={{ flexGrow: 1 }} />
          <A href="/signup">
            <Button sx={{ color: "white" }}>Sign Up</Button>
          </A>
          <A href="/login">
            <Button sx={{ color: "white" }}>Login</Button>
          </A>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
