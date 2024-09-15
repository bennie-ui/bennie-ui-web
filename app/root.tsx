import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import { Section } from "@bennie-ui/section";
import baselineStylesHref from "@bennie-ui/baseline/compiled/baseline.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: baselineStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full h-full bg-white dark:bg-gray-800">
        <Section
          size="sm"
          colors={{
            text: { color: "gray", weight: "500" },
            background: { color: "white" },
          }}
          overrides={{
            large: {
              size: "base",
            },
          }}
          dark={{
            colors: {
              text: { color: "gray" },
              background: { color: "gray", weight: "800" },
            },
          }}
          flex={{ direction: "row" }}
        >
          <main id="main-content">
            <Outlet />
          </main>
        </Section>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
