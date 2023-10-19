import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import { InitialView } from "./components/InitialView";
export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#4f0055" }}>
        {/* <InitialView /> */}
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
