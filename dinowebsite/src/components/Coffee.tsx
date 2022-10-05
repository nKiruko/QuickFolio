import Image from "next/image";
import { useEffect, useState } from "react";

const Coffee = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function getCoffeeAmount() {
      let response = await fetch(
        "https://tm-coffeecounter.jonasclaesbe.workers.dev/api/coffee-count"
      );
      let data = await response.json();
      console.log(typeof data.amountOfCoffees);
      setData(data);
      

      let interval = 500;
      let startValue = 0;
      let endValue = data.amountOfCoffees;
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        console.log(startValue);
        document.getElementById('totalCoffee')!.innerText = startValue.toString()
        if (startValue == endValue) clearInterval(counter);
      }, duration);

    }
    getCoffeeAmount();
  }, []);

  return (
    <div className="pt-36 text-center">
      <div className="relative">
        <div className="h-96 ">
          <Image
            src="/images/coffee.png"
            alt="Coffee"
            className="object-contain z-10"
            layout="fill"
          />
          <div>
            <div className="animate-opacity-wave3">
              <Image
                src="/images/CoffeeSmoke3.png"
                alt="Coffee"
                className="object-contain animate-[wiggle_4s_ease-in-out_infinite] z-0"
                layout="fill"
              />
            </div>
            <div className="animate-opacity-wave2">
              <Image
                src="/images/CoffeeSmoke2.png"
                alt="Coffee"
                className="object-contain animate-[wiggle_3s_ease-in-out_infinite] z-0"
                layout="fill"
              />
            </div>
            <div className="animate-opacity-wave">
              <Image
                src="/images/CoffeeSmoke.png"
                alt="Coffee"
                className="object-contain animate-[wiggle_2s_ease-in-out_infinite] z-0"
                layout="fill"
              />
            </div>
            <Image
              src="/images/CoffeeFilled.png"
              alt="Coffee"
              className="object-contain animate-opacity-wave4 z-0"
              layout="fill"
            />
          </div>
          {/* <div className="">
                        <Image src="/images/CoffeeLayer4.png"
                        alt="Coffee"
                        className="object-contain animate-opacity-wave4 z-0"
                        layout='fill'
                        />
                        <Image src="/images/CoffeeLayer3.png"
                        alt="Coffee"
                        className="object-contain animate-opacity-wave3 z-0"
                        layout='fill'
                        />
                        <Image src="/images/CoffeeLayer2.png"
                        alt="Coffee"
                        className="object-contain animate-opacity-wave2 z-0"
                        layout='fill'
                        />
                        <Image src="/images/CoffeeLayer1.png"
                        alt="Coffee"
                        className="object-contain animate-opacity-wave z-0"
                        layout='fill'
                        />
                    </div> */}
        </div>
      </div>
      <h1 className="font-heading text-2xl sm:text-3xl pt-5 text-dinocream">
        <span id="totalCoffee"
          x-data="animatedCounter(data.amountOfCoffees, 200)"
          x-init="updatecounter"
          x-text="Math.round(current)"
        >
          {data.amountOfCoffees}
        </span>{" "}
        Coffees drank this year.
      </h1>
    </div>
  );
};

export default Coffee;
