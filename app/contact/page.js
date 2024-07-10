import React from "react";
import Image from "next/image";
import CarsouelComponents from "../components/CarsouelComponents";
export default function Page() {
  return (
    <section className="text-black w-[100vw] md:h-[86vh] flex flex-col lg:flex-row  md:px-12 items-start md:pt-12  gap-10  relative">
      {/* <Image
        src="/images/original.jpg"
        width={1000}
        height={1000}
        className="w-[50vw] h-[90%] object-cover"
      /> */}
      <CarsouelComponents />
      <div className="flex-1 flex flex-col items-start">
        <div className="flex flex-col text-center md:text-left items-center  md:justify-between">
          <h2 className="text-4xl md:text-7xl font-extrabold">Contact Us</h2>
        </div>

        <form className="w-full bg-white text-black  py-4  md:py-5 flex flex-col gap-4  md:h-[80%] relative">
          <div className="flex flex-col md:flex-row gap-4 md:w-full">
            <div className="flex-col flex md:flex-1">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                defaultValue="John"
                className="border-2 border-black px-2 py-2 "
              />
            </div>
            <div className="flex-col flex md:flex-1">
              <label htmlFor="surname">Surname</label>
              <input
                name="surname"
                defaultValue="Smith"
                className="border-2 border-black px-2 py-2 "
              />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className="flex-col flex w-[20%]">
              <label htmlFor="code">Code</label>
              <input
                name="code"
                defaultValue="+971"
                className="border-2 border-black px-2 py-2 "
              />
            </div>
            <div className="flex-col flex flex-1">
              <label htmlFor="number">Number</label>
              <input
                name="number"
                defaultValue="5x xxx xxxx"
                className="border-2 border-black px-2 py-2 "
              />
            </div>
          </div>

          <div className="flex-col flex">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              defaultValue="Message"
              className="border-2 border-black px-2 py-2  flex text-start h-[20vh] resize-none"
            />
          </div>
          <button className="border-2 border-black bg-black  text-white hover:bg-transparent hover:text-black md:w-[30%] py-2  self-center">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
