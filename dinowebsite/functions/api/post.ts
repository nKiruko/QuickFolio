import {InquiryData} from '../../src/modules/inquiry';


export interface Env {
  INQUIRIES: KVNamespace;
}
export interface requestProps {
  request : Request;
}


export const onRequestPost: PagesFunction<Env> = async ( env,{request}) => {
  try {
    const { headers } = request;
    const contentType = headers.get('content-type') || '';

    if(!contentType.includes('form')) throw new Error('Content-type must be form');

    const formData = await request.formData();

    console.log(formData);

    let requiredFields = ["firstname","lastname","email","message"];

    let pushed = {};
    for (const property of requiredFields) {
      if(!formData.get(property))  throw new Error(`${property} is required`);
      pushed[property] = formData.get(property);
    }
    

    let value = await INQUIRIES.get("KEY");

    return new Response(formData.get("pdfke"), {
      headers: { "Content-Type": "application/pdf" },
    });

    // const body = {};
    // for (const entry of formData.entries()) {
    //   body[entry[0]] = entry[1];
    // }

    // return new Response(JSON.stringify(body));
    
  } catch(e) {
    let u = e as Error;
    let result = u.message;
    return new Response(result);
  }

}