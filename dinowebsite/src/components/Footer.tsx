import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-dinoblack text-dinocream m-auto h-auto">
            <div className='flex justify-between p-5'>
                <div className='flex-none w-52'>
                    <div className='flex flex-col justify-between space-y-2'>
                        <h1 className='text-5xl font-heading'>Contacts</h1>
                        <p>Digital Innovation</p>
                        <p>IT Factory</p>
                        <p>Thomas More - Campus Geel</p>
                        <p>Kleinhoefstraat 4, 2440 Geel</p>
                    </div>
                </div>

                <div className='grow h-14 text-center sm:hidden md:block'>
                    <Image src="/../public/images/logoWithText.png" alt="Dino Logo" width={300} height={300}/>
                </div>

                <div className='flex-none w-52'>
                    <div className='flex flex-col justify-between space-y-2 items-center'>
                        <Icon className="w-10 h-10" icon="ci:mail"/>
                        <Icon className="w-10 h-10" icon="bi:messenger"/>
                        <Icon className="w-10 h-10" icon="akar-icons:facebook-fill"/>
                        <Icon className="w-10 h-10" icon="akar-icons:youtube-fill"/>
                        <Icon className="w-10 h-10" icon="ant-design:twitter-circle-filled"/>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;