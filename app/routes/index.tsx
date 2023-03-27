import type { HeadersFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "public, s-max-age=86400, stale-while-revalidate",
  };
};

export function loader() {
  return json({
    formattedTime: new Intl.DateTimeFormat("en", {
      second: "2-digit",
      minute: "2-digit",
      hour: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(new Date()),
    headers: {
      "cache-control": "public, s-max-age=86400, stale-while-revalidate",
    },
  });
}

export default function Index() {
  const { formattedTime } = useLoaderData<typeof loader>();
  return <h1>A Remix Static page rendered at&nbsp;{formattedTime}</h1>;
}
