import * as React from "react";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    TextField,
    Typography,
    createTheme,
    Stack,
    Divider,
    Button,
} from "@mui/material";

const theme = createTheme({ palette: { mode: "dark" } });

const MailgunSenderApp = () => {
    const [apiKey, setApiKey] = React.useState("");
    const [kundenName, setKundenName] = React.useState("");

    // UI Elemente von https://mui.com/
    // Network mit fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

    const onButtonClick = React.useCallback(() => {
        alert("TODO");
    }, [apiKey, kundenName]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Stack>
                    <Typography variant="h2">Mailgun App</Typography>
                    <Typography variant="body1">API KEY</Typography>
                    <TextField
                        value={apiKey}
                        onChange={(event) => setApiKey(event.target.value)}
                    />
                    <Divider />
                    <Typography variant="body1">Name von Kunde</Typography>
                    <TextField
                        value={kundenName}
                        onChange={(event) => setKundenName(event.target.value)}
                    />
                    <Button onClick={onButtonClick} />
                </Stack>
            </Container>
        </ThemeProvider>
    );
};

export default MailgunSenderApp;
