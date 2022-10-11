
// Reacts to POST /hello-world
export const onRequestPost = async ( request : Request) => {
  return new Response("hello world");
}