"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";


function Header() {
  const { data: session } = useSession();

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-2 px-10 flex justify-between shadow-sm bg-fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-10 items-center">
        <Image src="/yellowtaxi.png" width={50} height={50} alt="logo"></Image>
        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            <li
              className={`'hover:bg-slate-100 px-4 p-2 cursor-pointer rounded-lg text-black' ${
                path == "/" && "bg-slate-200 rounded-lg text-black"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={"/booking"}>
            <li className={`'hover:bg-slate-100 px-4 p-2 cursor-pointer rounded-lg text-black' ${
                path == "/booking" && "bg-slate-200 rounded-lg text-black"
              }`}
            >
              Booking
            </li>
          </Link>
          <Link href={"/our-cars"}>
            <li className={`'hover:bg-slate-100 px-4 p-2 cursor-pointer rounded-lg text-black' ${
                path == "/our-cars" && "bg-slate-200 rounded-lg text-black"
              }`}
            >
              OurCars
            </li>
          </Link>
        </ul>
      </div>


      <div className="flex gap-2 ">

{/* drop down code */}
        <div className="relative "> 
          <ul className="flex gap-8 items-center">
            <li onClick={toggleDropdown} className="cursor-pointer">
              {session && (
                <Image
                  src={session.user.image}
                  width={30}
                  height={30}
                  alt="User profile"
                  className="rounded-full"
                />
              )}
            </li>
          </ul>

          {isDropdownOpen && (
            <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 border-b border-gray-100 break-all">
                  {session.user.email}
                </li>
                <li className="px-4 py-2">
                  <button
                    onClick={signOut}
                    className="w-full text-left text-black py-2 rounded-md hover:bg-slate-200 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {!session && (
          <Link href={"/login"}>
            {" "}
            <Button className="hover:bg-slate-200 hover:text-black  bg-black text-white px-4 p-4 rounded-lg">
              Login
            </Button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
