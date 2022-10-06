import { Icon } from "@iconify/react";

const Inquiry = () => {
    return(
        <div className="relative w-fill md:w-[1000px] overflow-hidden m-auto pb-10">
            <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"/>
            <div className="bg-dinoblack h-12 w-full pl-5 flex items-center">
                <h1 className="text-lg font-heading text-white">
                Question 1 
                </h1>
            </div>

            <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <Icon className="w-6 h-6" icon="material-symbols:arrow-drop-down-circle-outline"/>
            </div>

            <div className="bg-dinogrey overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4 ">
                    <p>
                        This is some filler content to see how this works, it's just a whole lot of useless text, This is some filler content to see how this works, it's just a whole lot of useless text
                        This is some filler content to see how this works, it's just a whole lot of useless text, This is some filler content to see how this works, it's just a whole lot of useless text
                        This is some filler content to see how this works, it's just a whole lot of useless text, This is some filler content to see how this works, it's just a whole lot of useless text
                    </p>
                </div>
            </div>
        </div>
    );}

export default Inquiry;