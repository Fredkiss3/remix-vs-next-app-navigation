import { wait } from "~/lib.server";
import { json } from "@vercel/remix";

export async function loader() {
  await wait(100);
  return json({
    blocking: "ok",
  });
}
export default function SSRBlocking() {
  return (
    <>
      <h1>Blocking SSR</h1>
    </>
  );
}
