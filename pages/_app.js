import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </ThemeProvider>
    </>
  );
}
