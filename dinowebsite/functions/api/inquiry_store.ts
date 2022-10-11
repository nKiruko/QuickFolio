import { InquiryData } from "../../src/modules/inquiry";

const _inquiry = [
  <InquiryData>{
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    message: "Hello World",
    date: 123456789,
  },
  <InquiryData>{
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    message: "Hello World",
    date: 123456789,
  },
];

export default class InquiryStore {
  async all() {
    return _inquiry;
  }

  async find(id: number) {
    return _inquiry.find((inquiry) => inquiry.id.toString() === id.toString());
  }
}
