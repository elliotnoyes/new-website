import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../utils";
import Button from "../Button";
import Image from "next/image";
import { slide } from "../../animations";

const SimplePageHeader = ({ backName }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useIsomorphicLayoutEffect(() => {
    slide(".sliding", 380, 270);
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-10 tablet:hidden flex justify-between ${
          theme === "dark" ? "bg-moonsky" : "bg-marssky"
        } dark:text-white`}
      >
        {theme === "dark" ? (
          <div className="sliding">
              {mounted && (
                <Image
                alt="rover"
                src="/images/header/plane-w.png"
                width={71}
                height={56}
                ></Image>
              )}
          </div>
        ) : (
          <div className="sliding">
            {mounted && (
              <Image
              alt="rover"
              src="/images/header/plane-b.png"
              width={71}
              height={56}
              ></Image>
            )}
          </div>
        )}

        <div className="flex items-center">
          <Button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            type="header"
            classes="mb-2"
          >
            <Image
              alt="darkmode toggle"
              src={`/images/header/${
                theme === "dark" ? "moon.svg" : "sun.svg"
              }`}
              height={32}
              width={32}
            ></Image>
          </Button>

          <Button onClick={() => router.push(`/${backName.toLowerCase().replace(/\s+/g, '-')}`)} classes="ml-0" type="header">
            Back to {backName}
          </Button>
        </div>
      </div>
      
      <div
        className={`hidden flex-row justify-between sticky ${
          theme === "dark" ? "bg-moonsky" : "bg-marssky"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        {theme === "dark" ? (
          <div className="sliding">
              {mounted && (
                <Image
                alt="rover"
                src="/images/header/plane-w.png"
                width={71}
                height={57}
                ></Image>
              )}
          </div>
        ) : (
          <div className="sliding">
            {mounted && (
              <Image
              alt="rover"
              src="/images/header/plane-b.png"
              width={71}
              height={57}
              ></Image>
            )}
          </div>
        )}
        <div className="flex">
          <Button onClick={() => router.push("/")} classes="first:ml-1" type="header">
            Home
          </Button>

          <Button onClick={() => router.push(`/${backName.toLowerCase().replace(/\s+/g, '-')}`)} classes="first:ml-1" type="header">
            Back to {backName}
          </Button>

          {mounted && theme && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              type="header"
            >
              <Image
                alt="darkmode toggle"
                src={`/images/header/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
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

export default SimplePageHeader;