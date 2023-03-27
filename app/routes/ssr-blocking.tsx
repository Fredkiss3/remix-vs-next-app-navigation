import { wait } from "~/lib.server";

export async function loader() {
  await wait(2000);
  return {
    streamed: "ok",
  };
}
export default function SSRBlocking() {
  return (
    <>
      <h1>Blocking SSR</h1>
    </>
  );
}
