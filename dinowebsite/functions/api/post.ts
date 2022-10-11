
// Reacts to POST /hello-world
export const onRequestPost = async ( request : Request) => {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const message = formData.get("message");
  //make an object of the above data 
  const data = {
    firstname,
    lastname,
    email,
    message
  };

  return new Response(JSON.stringify(data));
}