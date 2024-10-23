import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "16px",
          display: "flex",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          views={["year", "month", "day"]}
          showDaysOutsideCurrentMonth
          sx={{
            mt:'5%',
            height: '80%',
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Calendar;
