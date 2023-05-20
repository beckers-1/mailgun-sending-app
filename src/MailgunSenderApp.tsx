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
  Box,
  Tabs,
  Tab,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const theme = createTheme({ palette: { mode: "dark" } });

const MailgunSenderApp = () => {
  const [apiKey, setApiKey] = React.useState("");
  const [value, setValue] = React.useState(0);
  const [customer_surname_reservation, setCustomerSurnameReservation] =
    React.useState("");
  const [date_reservation, setDateReservation] = React.useState("");
  const [time_reservation, setTimeReservation] = React.useState("");
  const [duration_reservation, setDurationReservation] = React.useState("");
  const [location_reservation, setLocationReservation] = React.useState("");
  const [duration2_reservation, setDuration2Reservation] = React.useState("");
  const [images_reservation, setImagesReservation] = React.useState("");
  const [price_reservation, setPriceReservation] = React.useState("");
  const [current_year_reservation, setCurrentYearReservation] =
    React.useState("");
  const [customer_email_reservation, setCustomerMailReservation] =
    React.useState("");
  const [current_year_location, setCurrentYearLocation] = React.useState("");
  const [customer_email_location, setCustomerMailLocation] = React.useState("");
  const [message_title_message, setMessageTitleMessage] = React.useState("");
  const [customer_surname_message, setKundenVornameMessage] =
    React.useState("");
  const [message_text_message, setMessageTextMessage] = React.useState("");
  const [current_year_message, setCurrentYearMessage] = React.useState("");
  const [customer_email_message, setCustomerMailMessage] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // UI Elemente von https://mui.com/
  // Network mit fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  const onButtonClickReservation = React.useCallback(() => {
    const mailgun = require("mailgun-js");
    const DOMAIN = "mail.farbgrafie.de";
    const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });
    const data = {
      from: "Michael Becker Farbgrafie Fotografie <kontakt@farbgrafie.de>",
      to: customer_email_reservation,
      subject:
        "Reservierungsbestätigung Fotoshooting - Michael Becker Farbgrafie Fotografie",
      template: "reservation_template",
      "h:X-Mailgun-Variables": {
        customer_surname: customer_surname_reservation,
        shooting_date: date_reservation,
        shooting_time: time_reservation,
        shooting_duration: duration_reservation,
        shooting_loaction: location_reservation,
        shooting_duration_2: duration2_reservation,
        images_edited: images_reservation,
        price: price_reservation,
        Current_year: current_year_reservation,
      },
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    alert("Nachricht verschickt!");
  }, [
    apiKey,
    customer_surname_reservation,
    date_reservation,
    time_reservation,
    duration_reservation,
    location_reservation,
    duration2_reservation,
    images_reservation,
    price_reservation,
    current_year_reservation,
    customer_email_reservation,
  ]);

  const onButtonClickLocation = React.useCallback(() => {
    const mailgun = require("mailgun-js");
    const DOMAIN = "mail.farbgrafie.de";
    const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });
    const data = {
      from: "Michael Becker Farbgrafie Fotografie <kontakt@farbgrafie.de>",
      to: customer_email_location,
      subject: "Fotoshooting Vorschläge - Michael Becker Farbgrafie Fotografie",
      template: "location_vorschlaege",
      "h:X-Mailgun-Variables": { Current_year: current_year_location },
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    alert("Nachricht verschickt!");
  }, [apiKey, current_year_location, customer_email_location]);

  const onButtonClickMessage = React.useCallback(() => {
    const mailgun = require("mailgun-js");
    const DOMAIN = "mail.farbgrafie.de";
    const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });
    const data = {
      from: "Michael Becker Farbgrafie Fotografie <kontakt@farbgrafie.de>",
      to: customer_email_message,
      subject: message_title_message,
      template: "message_template",
      "h:X-Mailgun-Variables": {
        message_title: message_title_message,
        customer_surname: customer_surname_message,
        message_text: message_text_message,
        Current_year: current_year_message,
      },
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    alert("Nachricht verschickt!");
  }, [
    apiKey,
    message_title_message,
    customer_surname_message,
    message_text_message,
    current_year_message,
    customer_email_message,
  ]);

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
          <Typography variant="h5">Choose template</Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
              >
                <Tab label="Reservation" {...a11yProps(0)} />
                <Tab label="Location" {...a11yProps(1)} />
                <Tab label="Message" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography variant="body1">Vorname von Kunde</Typography>
              <TextField
                fullWidth
                value={customer_surname_reservation}
                onChange={(event) =>
                  setCustomerSurnameReservation(event.target.value)
                }
              />
              <Divider />
              <Typography variant="body1">Datum</Typography>
              <TextField
                value={date_reservation}
                onChange={(event) => setDateReservation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Uhrzeit</Typography>
              <TextField
                value={time_reservation}
                onChange={(event) => setTimeReservation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Dauer</Typography>
              <TextField
                value={duration_reservation}
                onChange={(event) => setDurationReservation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Location</Typography>
              <TextField
                fullWidth
                value={location_reservation}
                onChange={(event) => setLocationReservation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Dauer 2</Typography>
              <TextField
                value={duration2_reservation}
                onChange={(event) =>
                  setDuration2Reservation(event.target.value)
                }
              />
              <Divider />
              <Typography variant="body1">Bilder</Typography>
              <TextField
                value={images_reservation}
                onChange={(event) => setImagesReservation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Preis</Typography>
              <TextField
                value={price_reservation}
                onChange={(event) => setPriceReservation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Aktuelles Jahr</Typography>
              <TextField
                value={current_year_reservation}
                onChange={(event) =>
                  setCurrentYearReservation(event.target.value)
                }
              />
              <Divider />
              <Typography variant="body1">Kunden E-Mail</Typography>
              <TextField
                fullWidth
                value={customer_email_reservation}
                onChange={(event) =>
                  setCustomerMailReservation(event.target.value)
                }
              />
              <Divider />
              <Button variant="contained" onClick={onButtonClickReservation}>
                Sende E-Mail (Reservation)
              </Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="body1">Aktuelles Jahr</Typography>
              <TextField
                value={current_year_location}
                onChange={(event) => setCurrentYearLocation(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Kunden E-Mail</Typography>
              <TextField
                fullWidth
                value={customer_email_location}
                onChange={(event) =>
                  setCustomerMailLocation(event.target.value)
                }
              />
              <Divider />
              <Button variant="contained" onClick={onButtonClickLocation}>
                Sende E-Mail (Location)
              </Button>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="body1">Nachrichten Überschrift</Typography>
              <TextField
                fullWidth
                value={message_title_message}
                onChange={(event) => setMessageTitleMessage(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Vorname von Kunde</Typography>
              <TextField
                fullWidth
                value={customer_surname_message}
                onChange={(event) =>
                  setKundenVornameMessage(event.target.value)
                }
              />
              <Divider />
              <Typography variant="body1">Nachrichten Text</Typography>
              <TextField
                fullWidth
                multiline
                rows={8}
                value={message_text_message}
                onChange={(event) => setMessageTextMessage(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Aktuelles Jahr</Typography>
              <TextField
                value={current_year_message}
                onChange={(event) => setCurrentYearMessage(event.target.value)}
              />
              <Divider />
              <Typography variant="body1">Kunden E-Mail</Typography>
              <TextField
                fullWidth
                value={customer_email_message}
                onChange={(event) => setCustomerMailMessage(event.target.value)}
              />
              <Divider />
              <Button variant="contained" onClick={onButtonClickMessage}>
                Sende E-Mail (Nachricht)
              </Button>
            </TabPanel>
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default MailgunSenderApp;
