import React from "react";
import Button from "./Button";
import Form from "./Form";

export default function Hero() {
  return (
    <div className="md:container mx-auto font-poppins sm:mt-12 md:mt-24">
      <div className="sm:w-10/12 md:w-8/12 mx-auto">
        <p className="text-blue-light">Unhappy with your website?</p>
        <h1 className="lg:text-5xl sm:text-2xl md:text-4xl font-medium lg:leading-normal sm:leading-normal mt-4">
          We create beautiful
          <br />
          and fast web services
        </h1>
      </div>
      <div className="mt-10 md:w-11/12 md:mx-auto lg:w-12/12 sm:h-[135px] md:h-[10%] object-cover">
        <img
          src="/assets/images/heroImage.jpg"
          alt=""
          className="w-full rounded-2xl h-full object-cover"
        />
      </div>
      <div className="sm:w-10/12 md:w-8/12 mx-auto mt-10">
        <h1 className="sm:text-2xl lg:text-5xl md:text-4xl font-medium lg:leading-normal sm:leading-normal mt-4">
          Story, emotion
          <br />
          and purpose
        </h1>
        <div className="w-5/12 mt-10 lg:w-7/12 sm:w-10/12">
          <p className="sm:text-sm md:text-xl text-gray-light">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
        </div>
      </div>
      <div className="sm:w-10/12 md:w-8/12 mx-auto mt-10">
        <p className="text-gray-lighter">Want us to contact you?</p>
        <div className="mt-3">
          <Form />
        </div>
      </div>
    </div>
  );
}
