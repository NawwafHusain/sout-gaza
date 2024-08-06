"use client";
import React from "react";
import Image from "next/image";
import CarsouelComponents from "../components/CarsouelComponents";
import toast from "react-hot-toast";

export default function Page() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Sending...");
    // console.log(e.target.firstName.value);
    // const data = {
    //   fname: e.target.firstName.value,
    //   lname: e.target.lastName.value,
    //   code: e.target.code.value,
    //   number: e.target.number.value,
    //   email: e.target.Email.value,
    //   message: e.target.message.value,
    // };
    // console.log(data);
    try {
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          fname: e.target.firstName.value,
          lname: e.target.lastName.value,
          code: e.target.code.value,
          number: e.target.number.value,
          email: e.target.Email.value,
          message: e.target.message.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      toast.dismiss();
      const result = await res.json();
      console.log(result);
      if (result.status === 200) {
        toast.success("Message Sent Successfully");
      } else {
        toast.error(
          "Something went wrong, if the problem persists, please contact us directly at CV@soutgaza.com"
        );
      }
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error(
        "Something went wrong, if the problem persists, please contact us directly at CV@soutgaza.com"
      );
    }
  };

  return (
    <section className="text-black w-[100vw] md:h-[86vh] flex flex-col lg:flex-row  md:px-12 items-start md:pt-12  gap-10  relative overflow-x-hidden">
      {/* <Image
        src="/images/original.jpg"
        width={1000}
        height={1000}
        className="w-[50vw] h-[90%] object-cover"
      /> */}
      <CarsouelComponents />
      <div className="flex-1 flex flex-col items-start px-4 lg:px-0 lg:w-auto max-w-[95vw] self-center py-24 lg:py-0">
        <div className="flex flex-col text-center md:text-left items-center  md:justify-between">
          <h2 className="text-4xl md:text-7xl font-extrabold">Contact Us</h2>
        </div>

        <form
          className="w-full bg-white text-black  py-4  md:py-5 flex flex-col gap-4  md:h-[80%] relative"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:w-full">
            <div className="flex-col flex md:flex-1">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                placeholder=""
                required
                className="border-2 border-black px-2 py-2 "
              />
            </div>
            <div className="flex-col flex md:flex-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                placeholder=""
                required
                className="border-2 border-black px-2 py-2 "
              />
            </div>
          </div>
          <div className="flex-col flex md:flex-1">
            <label htmlFor="Email">Email</label>
            <input
              name="Email"
              placeholder="example@email.com"
              required
              className="border-2 border-black px-2 py-2 "
            />
          </div>
          <div className="flex  gap-4">
            <div className="flex-col flex w-[20%]">
              <label htmlFor="code">Code</label>
              <input
                name="code"
                placeholder="+962"
                className="border-2 border-black px-2 py-2 "
              />
            </div>
            <div className="flex-col flex flex-1">
              <label htmlFor="number">Number</label>
              <input
                name="number"
                placeholder="7x xxx xxxx"
                className="border-2 border-black px-2 py-2 "
              />
            </div>
          </div>

          <div className="flex-col flex">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              required
              placeholder="Message"
              className="border-2 border-black px-2 py-2  flex text-start h-[20vh] resize-none"
            />
          </div>
          <button className="border-2 border-black bg-black  text-white hover:bg-transparent hover:text-black md:w-[30%] py-2 px-10 self-center">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
