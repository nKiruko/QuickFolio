import { useRouter } from "next/router";

export default function Lines() {
  const router = useRouter();
  return (
    <div className="mb-[7.5rem]">
      <div className="bg-tmorange bg-[linear-gradient(120deg,_#f4b34d_20%,_#ca7d37_22%,_#bf6f32_30%,_#ae562b_32%,_#851d1c_40%,_#851d1c_60%,_#9c3e25_68%,_#bf6f32_70%,_#d48a3d_78%,_#f4b34d_80%)] mb-72 absolute inset-x-0 h-60 4xl:h-96 rotate-9 xl:rotate-[5deg] 4xl:rotate-2 scale-125 shadow-glow "></div>
      <div className={`bg-dinoblack dark:bg-coffeegreen mb-[9.5rem] absolute inset-x-0 h-60 4xl:h-96 -rotate-9 xl:-rotate-[5deg] 4xl:-rotate-2 scale-125 shadow-glow `}></div>
    </div>
  );
}
