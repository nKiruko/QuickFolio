
// Reacts to POST /hello-world
export const onRequestPost = async ( request : Request) => {
  const formData = await request.formData();
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  //make an object of the above data 
  const data = {
    firstname,
    lastname,
    email,
    message
  };

  return new Response(JSON.stringify(data));
}