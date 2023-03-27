import { wait } from "~/lib.server";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { defer } from "@vercel/remix";

export async function loader() {
  return defer({
    streamed: wait(2000),
  });
}
export default function SSRBlocking() {
  const { streamed } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Streaming SSR</h1>
      <Suspense fallback={<>Streaming...</>}>
        <Await resolve={streamed}>
          {() => (
            <div
              style={{
                color: "blue",
              }}
            >
              Streamed result
            </div>
          )}
        </Await>
      </Suspense>
    </>
  );
}
