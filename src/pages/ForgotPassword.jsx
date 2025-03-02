import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "./bg/signin.svg";
import bgimg from "./bg/backimg.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "900px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
};

export default function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed! Enter a valid email address.
        </Alert>
      </Snackbar>
      <Box
        sx={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  height: "100%",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ p: 3, textAlign: "center", backgroundColor: "#3b33d5" }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Avatar sx={{ bgcolor: "#ffffff", mx: "auto" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                      Reset Password
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        sx={{ mb: 2 }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: 2,
                          color: "#ffffff",
                          backgroundColor: "#FF9A01",
                          mb: 2,
                        }}
                      >
                        Send Reset Link
                      </Button>
                      <Typography variant="body2">
                        Login to your account?{" "}
                        <span
                          style={{ color: "#beb4fb", cursor: "pointer" }}
                          onClick={() => navigate("/")}
                        >
                          Sign In
                        </span>
                      </Typography>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
