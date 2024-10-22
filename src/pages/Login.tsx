import { Grid, Paper, Box, Avatar, Typography, TextField, Button } from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

type Props = {}

const Login = (props: Props) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left side for login */}
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
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
            />
            <Typography>
              *สำหรับนักเรียน 
              username จะเป็น รหัสนักศึกษา
              รหัสผ่านจะเป็น วัน เดือน ปี
              ตัวอย่าง 01052548
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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