import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {
  CssBaseline,
} from '@mui/material';
// import { theme } from '../utils/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Store } from '../utils/Store';
// import { useRouter } from 'next/router';


// can add desscription as one parameter
const Layout = ({ children }) => {
  // const { state } = useContext(Store);
  // const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      // type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#8247e5',
      },
      secondary: {
        main: '#8c2512',
      },
    },
  });
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
          {children}
        <Footer />
      </ThemeProvider>  
    </>
  );
};

export default Layout;
