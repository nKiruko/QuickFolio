import { PagesEnv } from "../post";

export const onRequest: PagesFunction<PagesEnv> = async ({
  request,
  env,
}) => {
  try {
    const inquiries = await env.INQUIRIES.list({limit: 100});

    let inquiriesMapped = inquiries.keys.map(async (inquiry) => {
      return JSON.parse(await env.INQUIRIES.get(inquiry.name));
    });

    return new Response(JSON.stringify(await Promise.all(inquiriesMapped)), {
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