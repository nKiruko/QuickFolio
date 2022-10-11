export interface PagesEnv {
  INQUIRIES: KVNamespace;
}

enum FormDataItem {
  FIRST_NAME = "firstname",
  LAST_NAME = "lastname",
  EMAIL = "email",
  MESSAGE = "message",
  FILE = "file",
}

export const onRequestPost: PagesFunction<PagesEnv> = async ({
  request,
  env,
}) => {
  try {
    // Get the "Content-Type" of the request.
    if (!request.headers.get("Content-Type").includes("multipart/form-data")) {
      throw new Error("Content-Type must be multipart/form-data");
    }

    // Parse the request data.
    const formData = await request.formData();

    // console.log(formData);

    // Check required fields.
    let requiredFields = [
      FormDataItem.FIRST_NAME,
      FormDataItem.LAST_NAME,
      FormDataItem.EMAIL,
      FormDataItem.MESSAGE,
    ];

    for (const requiredField of requiredFields) {
      if (!formData.has(requiredField))
        throw new Error(`${requiredField} is required`);
    }

    // Create the object to enter into the KV namespace.
    const data = {
      firstName: formData.get(FormDataItem.FIRST_NAME),
      lastName: formData.get(FormDataItem.LAST_NAME),
      email: formData.get(FormDataItem.EMAIL),
      message: formData.get(FormDataItem.MESSAGE),
    };

    // Generate a key based on the epoch.
    const kvKey = `inquiry-${Date.now()}`;

    // Save the data to the KV namespace.
    await env.INQUIRIES.put(kvKey, JSON.stringify(data));

    const inquiries = await env.INQUIRIES.list();
    console.log(inquiries);

    const inquiry = await env.INQUIRIES.get(kvKey);
    console.log(inquiry);

    return new Response(formData.get("file"), {
      headers: { "Content-Type": "application/pdf" },
    });
  } catch (e) {
    if (e instanceof Error) {
      return new Response(e.message);
    }

    return new Response("Internal server error.", { status: 500 });
  }
};
