import { Key } from "react";
import { InquiryData } from "../../modules/inquiry";
import { useState, useEffect } from "react";
import Inquiry from "./Inquiry";

interface Props {
  inquiryFetchedData : InquiryData[];
}

const InquiryEntries = () => {
    const [inquiryFetchedData, setInquiries] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
      async function getInquiries() {
        let response = await fetch(
          "/api/admin/get"
        );
        let data = await response.json();

        let formattedInquiries = data.map((inquiry: InquiryData, i: Key | null | undefined) => {
          return (
              <Inquiry inquiryData={inquiry} key={i}/>
          );
        })
  
        setInquiries(formattedInquiries);
      }
      getInquiries();
    }, []);
    return(
      <div>{inquiryFetchedData}</div>

    );
}

export default InquiryEntries;