import React from "react";
import { Box, Typography } from "@mui/material";
import studentData from "../Mock/stdCount"; // import mock data

const StudentCountCard: React.FC = () => {
  const { totalStudents } = studentData;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#4A90E2",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="subtitle1" sx={{ marginBottom: 1, fontSize: "20px" }}>
        จำนวน นักศึกษาทั้งหมด
      </Typography>
      <Typography variant="h1" sx={{ lineHeight: 1, display: "flex" }}>
        <Box sx={{ fontSize: "96px" }}>
          {totalStudents}
        </Box>
        <Box sx={{ fontSize: "20px" }}>คน</Box>
      </Typography>
    </Box>
  );
};

export default StudentCountCard;
