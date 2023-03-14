import * as React from "react";
import { Props } from "../props";
export default function MainContainer(props: Props) {
  return (
    <main className="m-auto h-[300vh] max-w-[750px] bg-opacity-5 shadow backdrop-blur-sm ">
      {props.children}
    </main>
  );
}
