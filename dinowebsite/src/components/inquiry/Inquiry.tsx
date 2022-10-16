import { Icon } from "@iconify/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { InquiryData } from "../../modules/inquiry";

interface InquiryProps {
    inquiryData: InquiryData;
}

const Inquiry: FunctionComponent<InquiryProps> = ({ inquiryData }) => {
    const deleteInquiry = async () => {
        try {
            const res = await fetch(`/api/delete/inquiry-${inquiryData.date}`);

            if (res.status === 200) {
                document.getElementById(`inquiry-${inquiryData.date}`)?.remove();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="relative md:w-5/6" id={`inquiry-${inquiryData.date}`}>
            <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
            <div className="bg-dinoblack h-12 w-full pl-5 flex items-center">
                <h1 className="text-lg font-heading text-white float-left px-2">Sender&#58; {inquiryData.firstname}</h1>
                <h1 className="text-lg font-heading text-white float-right px-2 hidden md:block">
                    Email&#58; {inquiryData.email}
                </h1>
            </div>

            <div className="absolute top-3 right-3 text-white transition-transform duration-400 rotate-0 peer-checked:rotate-180">
                <Icon className="w-6 h-6" icon="material-symbols:arrow-drop-down-circle-outline" />
            </div>
            <div className="bg-dinogrey bg-opacity-50 overflow-hidden max-h-0 peer-checked:max-h-full">
                <div className="p-4">
                    <p className="font-semibold md:hidden">
                        Email&#58; {inquiryData.email}
                    </p>
                    <p className="font-semibold">
                        Message&#58;
                    </p>
                    <p className="pb-5">{inquiryData.message}</p>

                    <Link href={`mailto:"${inquiryData.email}"`}>
                        <a className="float-right mx-2 mb-5 hover:text-tmorange dark:hover:text-coffeecream text-4xl">
                            <Icon icon="bi:reply"></Icon>
                        </a>
                    </Link>
                    <button className="float-right mx-2 mb-5 hover:text-tmorange dark:hover:text-coffeecream text-4xl" onClick={deleteInquiry}>
                        <Icon icon="fluent:delete-16-regular"></Icon>
                    </button>
                    {
                      inquiryData.file ? (
                        <Link href={`/api/getFile/file-${inquiryData.date}`} target="_blank">
                          <a className="float-right mx-2 mb-5 hover:text-tmorange dark:hover:text-coffeecream text-4xl">
                              <Icon icon="ant-design:folder-open-outlined"></Icon>
                           </a>
                         </Link>
                      ) : null
                   }
                </div>
            </div>
        </div>
    );
}

export default Inquiry;