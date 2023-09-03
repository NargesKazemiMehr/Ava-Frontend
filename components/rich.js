import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FormControl } from "react-bootstrap";
import { InputLabel, MenuItem, Select } from "@mui/material";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const ltrTheme = createTheme({ direction: "ltr" });
const rtlTheme = createTheme({ direction: "rtl" });

export default function AppContent(props) {
  const [isRtl, setIsRtl] = React.useState(true);
  const [value, setValue] = React.useState("initial value");
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", isRtl ? "rtl" : "ltr");
  }, [isRtl]);
  const [age, setAge] = React.useState("initial value");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
        <CssBaseline />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">سن</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="سن"
            onChange={handleChange}
          >
            <MenuItem value={10}>ای همه هستی </MenuItem>
            <MenuItem value={20}>ز تو پیدا شده</MenuItem>
            <MenuItem value={30}> سلام یسنبسیمبسنیبتمسینتبن تتمسنیتب</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </StylesProvider>
  );
}
