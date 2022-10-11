import { InquiryData } from "../../../src/modules/inquiry";
import InquiryStore from "../inquiry_store";

const Inquiries = async () => {
  const inquiries = new InquiryStore();
  const body = JSON.stringify(await inquiries.all());
  const headers = { "Content-type": "application/json" };
  return new Response(body, { headers });
};

export default Inquiries;
