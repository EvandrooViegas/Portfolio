import React from "react";
import { type Link as ILink } from "./links";
import Link from "next/link";
type Props = {} & ILink;
export default function NavLink(props: Props) {
  const { href, name } = props;
  return (
    <li>
      <a href={href} className="md:text-base text-sm hover:underline">{name}</a>
    </li>
  );
}
