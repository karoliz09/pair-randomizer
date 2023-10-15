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
      <body>
        <InitialView />
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
