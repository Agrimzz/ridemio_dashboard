// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  colorsTuple,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import "@mantine/charts/styles.css";
import "@/app/globals.css";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    fontFamily: '"Manrope", sans-serif',
    colors: {
      background: colorsTuple("#FBFAFC"),
      primary: colorsTuple("#5542F6"),
      success: colorsTuple("#20C9AC"),
      danger: colorsTuple("#FC3400"),
      info: colorsTuple("#00A5FF"),
      textPrimary: colorsTuple("#2E2C34"),
      textSecondary: colorsTuple("#84818A"),
      grayLight: colorsTuple("#D3D4D5"),
    },
    primaryColor: "primary",
  });

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
