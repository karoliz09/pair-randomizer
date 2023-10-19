import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";

import appStylesHref from "./styles/shared.css";

export const links = () => [{ rel: "stylesheet", href: appStylesHref }];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body className="niceBg" style={{ margin: 0, padding: 0 }}>
        {/* <InitialView /> */}
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
