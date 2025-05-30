import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Popper,
  Paper,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { tr } from "date-fns/locale";

const BugunHeader = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);
  
  
  const handleIconClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={tr}>
      <Box
        sx={{
          color: "white",
          p: 2,
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "normal" , fontSize:'16px' , fontStyle : 'italic' }}>
          {selectedDate.getDate() != new Date().getDate() || selectedDate.getMonth() != new Date().getMonth() ? `${selectedDate.getDate()}.${selectedDate.getMonth()}.${selectedDate.getFullYear()}` : "Bugün"}
        </Typography>
        <IconButton
          onClick={handleIconClick}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <CalendarTodayIcon />
        </IconButton>
        <Divider sx={{ backgroundColor: "white", mt: 2 }} />

        <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
          <Paper sx={{ mt: 1, p: 1 }}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </Paper>
        </Popper>
      </Box>
    </LocalizationProvider>
  );
};

export default BugunHeader;
