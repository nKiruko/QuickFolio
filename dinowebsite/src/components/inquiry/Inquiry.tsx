import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { InquiryData } from "../../modules/inquiry";

interface InquiryProps {
    inquiryData : InquiryData;
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

    return(
        <div className="relative md:w-5/6" id={`inquiry-${inquiryData.date}`}>
        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
                <div className="bg-dinoblack h-12 w-full pl-5 flex items-center">
                    <h1 className="text-lg font-heading text-white float-left px-2">Sender&#58; {inquiryData.firstname}</h1>
                    <h1 className="text-lg font-heading text-white float-right px-2 hidden md:block">
                    Email&#58; {inquiryData.email}
                    </h1>
                </div>

        <div className="absolute top-3 right-3 text-white transition-transform duration-400 rotate-0 peer-checked:rotate-180">
            <Icon className="w-6 h-6" icon="material-symbols:arrow-drop-down-circle-outline"/>
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
                <a className="rounded-full border-2 border-dinoblack px-5 hover:border-tmorange float-right mb-5">
                    Reply
                </a>
            </Link>
            <button className="rounded-full border-2 border-dinoblack px-5 hover:border-tmorange float-right mr-5 mb-5" onClick={deleteInquiry}>
                Delete
            </button>
            {
                inquiryData.file ? (
                    <Link href={`/api/getFile/file-${inquiryData.date}`} target="_blank">
                        <a className="rounded-full border-2 border-dinoblack px-5 hover:border-tmorange float-right mb-5">
                            Open file
                        </a>
                    </Link>
                ) : null
            }   
            </div>
        </div>
    </div>
    );}

export default Inquiry;