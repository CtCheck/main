import React from "react";
import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import data from "../Mock/SummaryChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const SummaryChart: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F5F7FA",
        borderRadius: "12px",
        justifyContent: "center", 
        alignItems: "center",       
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 , paddingLeft:'5%' , fontWeight:'Bold' ,paddingTop:'2%'}}>
        สรุปผล
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ paddingLeft:'5%'}}>
        สรุปจำนวนการเช็คชื่อในแต่ละสัปดาห์
      </Typography>
      <Box sx={{
        width: '100%',
        height: '80%',
        paddingLeft:'14%'
      }}>
      <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default SummaryChart;
