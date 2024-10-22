import { Grid, Paper, Box, Avatar, Typography, TextField, Button } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from '../Mock/users'; // Make sure the path is correct

type Props = {}

const Login = (props: Props) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const username = formData.get("username")! as string;
    const password = formData.get("password")! as string;

    if (username.length < 4) {
      setMessage("Username must be at least 4 characters");
      setTimeout(() => setMessage(undefined), 3000);
      return;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      setTimeout(() => setMessage(undefined), 3000);
      return;
    }

    if (username === data.username && password === data.password) {
      navigate("/homepage");
    } else {
      setMessage("Invalid username or password");
      setTimeout(() => setMessage(undefined), 3000);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: 4,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <EmojiPeopleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              sx={{ width: 381, height: 56 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ width: 381, height: 56 }}
            />

            <Typography
              sx={{
                fontSize: "12px",
                alignSelf: "flex-start",
                ml: 1,
                mt: 1,
              }}
            >
              *สำหรับนักเรียน <br />
              username คือ รหัสนักศึกษา <br />
              password คือ วัน เดือน ปี ตัวอย่าง 01052548
            </Typography>

            {message && (
              <Typography sx={{ color: "red", mt: 2 }}>
                {message}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 381 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>



      {/* Right side with image and text */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        maxWidth={860}
        sx={{
          backgroundColor: "#1565c0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          p: 4,
        }}
      >
        <Box textAlign="center">
          <img
            src="\src\assets\รุปโปรเจคนะจ๊ะ.png"
            alt="Warehouse"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <Typography component="h1" variant="h4" gutterBottom>
            ระบบจัดการสต๊อกสินค้าที่ง่ายและมีประสิทธิภาพ
          </Typography>
          <Typography component="p" variant="body1">
            ยินดีต้อนรับสู่ระบบจัดการสต๊อกสินค้าที่ช่วยให้คุณควบคุมและติดตามสินค้าในคลังได้อย่างสะดวกและรวดเร็ว
          </Typography>
        </Box>
      </Grid>
    </Grid>

  )
}

export default Login