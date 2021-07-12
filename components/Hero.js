import React from "react";
import Button from "./Button";
import Form from "./Form";

export default function Hero() {
  return (
    <div className="container mx-auto font-poppins m-24">
      <div className="w-8/12 mx-auto">
        <p className="text-blue-light">Unhappy with your website?</p>
        <h1 className="text-5xl font-medium leading-normal mt-4">
          We create beautiful
          <br />
          and fast web services
        </h1>
      </div>
      <div className="mt-10">
        <img
          src="/assets/images/heroImage.jpg"
          alt=""
          className="w-full rounded-2xl"
        />
      </div>
      <div className="w-8/12 mx-auto mt-10">
        <h1 className="text-5xl font-medium leading-normal mt-4">
          Story, emotion
          <br />
          and purpose
        </h1>
        <div className="w-5/12 mt-10 lg:w-7/12">
          <p className="text-xl text-gray-light">
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
        </div>
      </div>
      <div className="w-8/12 mx-auto mt-10">
        <p className="text-gray-lighter">Want us to contact you?</p>
        <div className="mt-3">
          <Form />
        </div>
      </div>
    </div>
  );
}
