"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      main: "#38B000",
      light: "#AEEC98",
      "200": "#93E675",
      "300": "#78DF53",
      "400": "#5DD930",
      "500": "#4CBE23",
      "600": "#3E9B1C",
      "700": "#307916",
      "800": "#235610",
      "900": "#153409",
      dark: "#071103",
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 769,
      lg: 1024,
      xl: 1280,
    },
  },
});
