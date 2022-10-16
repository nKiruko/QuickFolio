import { PagesEnv } from "./post";

export const onRequest: PagesFunction<PagesEnv> = async ({
  request,
  env,
}) => {
  try {
    const inquiries = await env.INQUIRIES.list({limit: 100});

    return new Response(JSON.stringify(inquiries), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (e) {
    if (e instanceof Error) {
      return new Response(e.message);
    }

    return new Response("Internal server error.", { status: 500 });
  }
};