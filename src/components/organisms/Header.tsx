import clsx from "clsx";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
   return (
      <Fragment>
         <div className="w-full h-12" />
         <header
            className={clsx(
               "fixed z-50 top-0 left-0 right-0 w-full h-12 backdrop-blur-xl bg-white/70",
               "border-b border-border"
            )}
         >
            <div className="w-full h-full container flex justify-between items-center ">
               {/* logo */}
               <div className="w-40">
               </div>
               <nav className="flex items-center gap-8 text-sm">
                  <ul className="flex items-center gap-x-4 font-medium">
                     <li className="hover:underline">
                        <NavLink to="#about" target="_parent">
                           About
                        </NavLink>
                     </li>
                     <li className="hover:underline">
                        <NavLink to="#projects" target="_parent">
                           Projects
                        </NavLink>
                     </li>
                  </ul>
                  <div className="">
                     <Link
                        to="/contact"
                        className="hover:underline font-medium whitespace-nowrap"
                     >
                        Contact me
                     </Link>
                  </div>
               </nav>
            </div>
         </header>
      </Fragment>
   );
}
