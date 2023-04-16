import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MailgunSenderApp from "./MailgunSenderApp";

const rootDiv = document.getElementById("app_root");

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(<MailgunSenderApp />);
}
