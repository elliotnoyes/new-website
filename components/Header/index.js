import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";

import Image from "next/image";

const Header = ({ handleWorkScroll, handleAboutScroll, handleProjectScroll}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden">
        {({ open }) => (
          <>
            <div className="flex items-center justify-end p-2 laptop:p-0">

              <div className="flex items-center">
                <Button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                >
                  <Image
                    alt="darkmode toggle"
                    src={`/images/${
                      theme === "dark" ? "moon.svg" : "sun.svg"
                    }`}
                    height={26}
                    width={26}
                  ></Image>
                </Button>

                <Popover.Button>
                  <Image
                    alt="menu"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    height={32}
                    width={32}
                  ></Image>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-1/4 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={() => router.push("/")} classes="first:ml-1">
                  Home
                </Button>
                <Button onClick={handleAboutScroll}>About</Button>
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleProjectScroll}>Projects</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`hidden flex-row justify-end sticky ${
          // theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          theme === "dark" ? "bg-cyan-400" : "bg-cyan-400"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <div className="flex">
          <Button onClick={() => router.push("/")} classes="first:ml-1">
            Home
          </Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleProjectScroll}>Projects</Button>

          {mounted && theme && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image
                alt="darkmode toggle"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                width={32}
                height={32}
              ></Image>
            </Button>
          )}
          </div>
      </div>
    </>
  );
};

export default Header;
