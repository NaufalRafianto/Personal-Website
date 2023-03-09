import * as React from "react";
import { Props } from "./props";
import { useRouter } from "next/navigation";

export default function Path(props: Props) {
  const router = useRouter();
  function Link(url: string) {
    router.push(url);
  }

  return (
    <div
      className={`cursor-pointer ${props.className}`}
      onClick={() => Link(props.url as string)}
    >
      {props.children}
    </div>
  );
}
