import { createTheme } from "@mui/material/styles";

const palette = {
  text: {
    primary: "#230078",
  },
  primary: {
    main: "#fafafa",
    contrastText: "#000",
  },
  secondary: {
    main: "#d84315",
    contrastText: "#fff",
  },
};

const typography = {
  h1: {
    fontWeight: 500,
    fontSize: "1.57143rem",
    lineHeight: "2.21429rem",
    color: "rgb(38, 38, 38)",
  },
  h2: {
    fontWeight: 800,
    fontSize: "48px",
    lineHeight: "54px",
  },
  h3: {
    fontWeight: 800,
    fontSize: "40px",
    lineHeight: "56px",
  },
  h5: {
    fontWeight: 800,
    fontSize: "20px",
    lineHeight: "32px",
  },
  h6: {
    fontWeight: 800,
    fontSize: "16px",
    lineHeight: "24px",
  },
  body1: {
    fontSize: "14px",
    fontWeight: 400,
  },
  body2: {
    fontSize: "1.57143rem",
    fontWeight: 500,
    lineHeight: "1.5",
  },
  subtitle1: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "24px",
  },
  caption: {
    paddingRight: "1.42857rem",
    fontsize: ".71429rem",
    color: "#999",
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      contained: {
        borderRadius: "20px",
        boxShadow: "none",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "18px",
        padding: "8px 16px",
        lineHeight: "24px",
      },
      text: {
        textTransform: "none",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "24px",
        borderRadius: "20px",
        marginRight: 3,
        marginLeft: 3,
        padding: "8px 16px",
      },
    },
  },
};

export const theme = createTheme({
  components,
  palette,
  typography,
});
