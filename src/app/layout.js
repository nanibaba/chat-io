import '@mantine/core/styles.css';
import "./globals.css";
import { 
  ColorSchemeScript, 
  mantineHtmlProps
} from '@mantine/core';
import ThemeProvider from "@/components/themeProvider.js";

export const metadata = {
  title: "ChatIO",
  description: "An application allowing one-on-one and group chats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto"/>
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
