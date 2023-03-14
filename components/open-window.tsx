import * as React from "react";
import { Props } from "./props";
import { useRouter } from "next/navigation";
export default function OpenWindow(props: Props) {
  function OpenLink(url: string) {
    window.open(url, "_blank");
  }
  return (
    <span className="link-span" onClick={() => OpenLink(props.url as string)}>
      {props.children}
    </span>
  );
}
