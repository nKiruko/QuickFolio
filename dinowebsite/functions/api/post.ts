
export const onRequestPost = async ( request : Request) => {
  try {
    const { headers } = request;
    const contentType = headers.get('content-type') || '';
  
    if (contentType.includes('application/json')) {
      return JSON.stringify(await request.json());
    } else if (contentType.includes('application/text')) {
      return request.text();
    } else if (contentType.includes('text/html')) {
      return request.text();
    } else if (contentType.includes('form')) {
      const formData = await request.formData();
      const body = {};
      // for (const entry of formData.entries()) {
      //   body[entry[0]] = entry[1];
      // }
      return JSON.stringify(formData);
    } else {
      // Perhaps some other type of data was submitted in the form
      // like an image, or some other binary data.
      return 'a file';
    }
  } catch(e) {
    let u = e as NodeJS.ErrnoException;
    let result = u.message;
    return new Response(result);
  }

}