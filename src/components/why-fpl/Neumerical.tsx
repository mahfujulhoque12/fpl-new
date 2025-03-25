"use client";
import { useEffect } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "../typography/SubHeading";

function Neumerical() {
  useEffect(() => {
    function animateValue(
      obj: HTMLElement,
      start: number,
      end: number,
      duration: number
    ): void {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const expertise = document.getElementById("expertise");
    const reservation = document.getElementById("reservation");
    const customer = document.getElementById("customer");
    const award = document.getElementById("award");

    if (
      expertise instanceof HTMLElement &&
      reservation instanceof HTMLElement &&
      customer instanceof HTMLElement &&
      award instanceof HTMLElement
    ) {
      animateValue(expertise, 0, 78, 5000);
      animateValue(reservation, 0, 78, 5000);
      animateValue(customer, 0, 5, 5000);
      animateValue(award, 0, 85, 5000);
    }
  }, []);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div>
          <SubHeading className="text-center text-gray-700 uppercase font-bold">
            Numerical Status of FPL
          </SubHeading>

          {/* Second Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3 text-black">
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="expertise"
                  className="flex items-center justify-center text-3xl font-bold text-black"
                >
                  78{" "}
                </div>
                <span className="text-3xl font-bold text-black">+</span>
              </h2>
              <span className="text-center text-gray-500">Project Done</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="reservation"
                  className="flex items-center justify-center text-3xl font-bold text-black"
                >
                  78
                </div>
                <span className="text-3xl font-bold text-black">+</span>
              </h2>
              <span className="text-center text-gray-500">Happy Customer</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="customer"
                  className="flex items-center justify-center text-3xl font-bold text-black"
                >
                  5
                </div>
              </h2>
              <span className="text-center text-gray-500">Company Ratings</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="award"
                  className="flex items-center justify-center text-3xl font-bold text-black"
                >
                  5
                </div>
                <span className="text-3xl font-bold text-black">+</span>
              </h2>
              <span className="text-center text-gray-500">
                Years Of Exprience
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Neumerical;
