import { PagesEnv } from "../post";

export const onRequest: PagesFunction<PagesEnv> = async ({
  request,
  params,
  env,
}) => {
  try {
    const file = await env.R2_INQUIRIES.get(params.name as string);
    if(!file) throw new Error("File not found");

    return new Response(await file.arrayBuffer());


  } catch (e) {
    if (e instanceof Error) {
      return new Response(e.message);
    }

    return new Response("Internal server error.", { status: 500 });
  }
};