import { wait } from "~/lib.server";
import { json } from "@vercel/remix";

export async function loader() {
  await wait(100);
  return json(
    {
      blocking: "ok",
    },
    {
      headers: {
        "cache-control": "public, s-max-age=86400, stale-while-revalidate",
      },
    }
  );
}
export default function SSRBlocking() {
  return (
    <>
      <h1>Blocking SSR</h1>
    </>
  );
}
