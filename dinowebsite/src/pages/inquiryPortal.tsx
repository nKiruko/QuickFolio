import type { NextPage } from "next";
import Head from "next/head";


const inquiryPortal: NextPage = () => {
    return(
        <div>
            <Head>
                <title>Digital Innovation - inquiry portal</title>
                <meta name="description" content="Digital Innovation" />
                <link rel="icon" href="images/LogoTextTransparant.png" />
            </Head>

            <main className="bg-dinocream z-5 px-10">
                <h1 className="font-heading text-4xl sm:text-5xl pt-24 sm:pt-32 pb-10">
                    Question portal
                </h1>
                <div className="pb-40 px-10 hidden md:block">
                    <div className="overflow-auto rounded-lg shadow-md">
                        <table className="w-full">
                            <thead className="bg-dinogrey rounded-lg border-b-2 border-gray-200">
                                <tr>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Sender</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Mail</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Message</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-dinocream">
                                    <td className="p-3 text-sm whitespace-nowrap">Marnik Maes</td>
                                    <td className="p-3 text-sm whitespace-nowrap">example@hotmail.com</td>
                                    <td className="p-3 text-sm whitespace-nowrap">This is an example question to see how the styling will be handled</td>
                                    <td className="p-3 text-sm whitespace-nowrap hover:underline hover:underline-offset-8 hover:decoration-tmorange">Read more</td>
                                </tr>
                                <tr className="bg-dinogrey">
                                    <td className="p-3 text-sm whitespace-nowrap">Marnik Maes</td>
                                    <td className="p-3 text-sm whitespace-nowrap">example@hotmail.com</td>
                                    <td className="p-3 text-sm whitespace-nowrap">This is an example question to see how the styling will be handled</td>
                                    <td className="p-3 text-sm whitespace-nowrap hover:underline hover:underline-offset-8 hover:decoration-tmorange">Read more</td>
                                </tr>
                                <tr className="bg-dinocream">
                                    <td className="p-3 text-sm">Marnik Maes</td>
                                    <td className="p-3 text-sm">example@hotmail.com</td>
                                    <td className="p-3 text-sm">This is an example question to see how the styling will be handled</td>
                                    <td className="p-3 text-sm whitespace-nowrap hover:underline hover:underline-offset-8 hover:decoration-tmorange">Read more</td>
                                </tr>
                                <tr className="bg-dinogrey">
                                    <td className="p-3 text-sm">Marnik Maes</td>
                                    <td className="p-3 text-sm">example@hotmail.com</td>
                                    <td className="p-3 text-sm">This is an example question to see how the styling will be handled</td>
                                    <td className="p-3 text-sm whitespace-nowrap hover:underline hover:underline-offset-8 hover:decoration-tmorange">Read more</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:hidden pb-40">
                    <div className="bg-dinogrey p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-blue-500 font-semibold">Marnik Maes</div>
                            <div>example@hotmail.com</div>
                        </div>
                        <div>This is an example question for bla bla bla</div>
                    </div>
                    <div className="bg-dinogrey p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-blue-500 font-semibold">Marnik Maes</div>
                            <div>example@hotmail.com</div>
                        </div>
                        <div>This is an example question for bla bla bla</div>
                    </div>
                    <div className="bg-dinogrey p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-blue-500 font-semibold">Marnik Maes</div>
                            <div>example@hotmail.com</div>
                        </div>
                        <div>This is an example question for bla bla bla</div>
                    </div>
                    <div className="bg-dinogrey p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-blue-500 font-semibold">Marnik Maes</div>
                            <div>example@hotmail.com</div>
                        </div>
                        <div>This is an example question for bla bla bla</div>
                    </div>
                    <div className="bg-dinogrey p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-blue-500 font-semibold">Marnik Maes</div>
                            <div>example@hotmail.com</div>
                        </div>
                        <div>This is an example question for bla bla bla</div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default inquiryPortal;