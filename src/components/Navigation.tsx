"use client";

//import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./Burger";

import type { FC } from "react";
import Link from "next/link";

export interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  //const pathname = usePathname();
  const [active, setActive] = useState(false);
  return (
    <div>
      <Burger active={active} onClick={() => setActive(!active)} />
      <nav className={className + " " + (active ? "active" : "")}>
        <ul className="menu">
          <li>
            <a
              href="https://www.linkedin.com/in/mishra-ravindra/"
              target="_blank"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            <Link href="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <a href="https://github.com/ravindra-mishra" target="_blank">
              GitHub Profile
            </a>
          </li>
          <li>
            <a
              href="https://blogs.perficient.com/author/rmishra/"
              target="_blank"
            >
              Perficient Blogs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
