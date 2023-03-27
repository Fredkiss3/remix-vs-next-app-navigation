import type { HeadersFunction } from "@remix-run/node";

export const headers: HeadersFunction = () => {
  return {
    "cache-control": "public, s-max-age=86400, stale-while-revalidate",
  };
};

export default function Index() {
  return (
    <h1>
      A Remix Static page rendered at&nbsp;
      {new Intl.DateTimeFormat("en", {
        second: "2-digit",
        minute: "2-digit",
        hour: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(new Date())}
    </h1>
  );
}
