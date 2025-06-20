import { Aleo } from "next/font/google";
import { 
    createTheme,
    MantineProvider,
    Space
} from '@mantine/core';
import NavBar from "./navbar.js";

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
});

const theme = createTheme({
  fontFamily: aleo.variable,
  colors: {
    'whitesmoke': [
        "#f5f5f5", "#e7e7e7","#cdcdcd", "#b2b2b2", "#9a9a9a",
        "#8b8b8b", "#848484", "#717171", "#656565", "#575757"
    ]
  }
});

const ThemeProvider = ({ children }) => (
  <MantineProvider theme={theme} defaultColorScheme="auto">
    <div> 
      <NavBar />
      <Space h="var(--navbar-height)" />
      {children}
    </div>   
  </MantineProvider>
);

export default ThemeProvider;
