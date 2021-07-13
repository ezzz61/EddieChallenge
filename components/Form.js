import React from "react";
import Button from "./Button";

export default function Form() {
  return (
    <form>
      <div className="md:w-[350px] relative">
        <input
          className="font-poppins bg-gray-lightest py-4 pl-4 w-full absolute rounded-xl focus:ring-2 focus:ring-blue-light outline-none"
          type="text"
          placeholder="Email"
        />
        <div className="absolute right-0 mt-1 mr-1">
          <Button active>Join</Button>
        </div>
      </div>
    </form>
  );
}
