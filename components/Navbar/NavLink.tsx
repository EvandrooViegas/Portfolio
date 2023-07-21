import React from "react";
import { Link } from "./links";
type Props = {} & Link;
export default function NavLink(props: Props) {
  const { href, name } = props;
  return (
    <li>
      <a href={href} className="text-base hover:underline">{name}</a>
    </li>
  );
}
