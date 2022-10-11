

export interface requestProps {
  request : Request;
}


export const onRequestPost: PagesFunction<requestProps> = async ( {request}) => {
  try {
    const { headers } = request;
    console.log(request);
    console.log(headers);
    const contentType = headers.get('content-type') || '';

    if(!contentType.includes('form')) throw new Error('Content-type must be form');

    
    const formData = await request.formData();
    return new Response(formData.get("file"), {
      headers: { "content-type": "application/pdf" },
    });

    const body = {};
    for (const entry of formData.entries()) {
      body[entry[0]] = entry[1];
    }

    return new Response(JSON.stringify(body));
    
  } catch(e) {
    let u = e as Error;
    let result = u.message;
    return new Response(result);
  }

}