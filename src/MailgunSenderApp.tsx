import * as React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  useTheme,
  TextField,
  Typography,
} from "@mui/material";

const MailgunSenderApp = () => {
  const theme = useTheme();
  const [inputValue, setInputValue] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1">Mailgun App</Typography>
        <TextField
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Container>
    </ThemeProvider>
  );
};

export default MailgunSenderApp;
