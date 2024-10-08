import React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Text } from "@bennie-ui/text";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Bennie-ui main page",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <Text colors={{ text: { color: "teal" } }}>Welcome to Bennie UI</Text>
    </div>
  );
}
