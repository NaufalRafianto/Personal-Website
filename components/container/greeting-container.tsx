import React from "react";
import { Props } from "../props";
import { Typewriter } from "react-simple-typewriter";

export default function GreetingContainer(props: Props) {
  return (
    <div className="m-auto h-fit w-2/3 bg-white bg-opacity-5 p-2 font-mono font-bold text-green-600">
      <h1 className="text-center">
        <Typewriter
          words={["Welcome onboard friends!"]}
          cursor
          cursorStyle="_"
        />
      </h1>
    </div>
  );
}
