import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const About = ({}) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="laptop:flex flex-row justify-center gap-4">
        <div
            className="flex justify-center items-center rounded-lg overflow-hidden laptop:basis-1/4"
            style={{ height: "400px" }}
        >
        <Image
            alt={"profile picture"}
            className="flex rounded-lg"
            src={"/images/profile_pic.jpeg"}
            width={400}
            height={400}
            priority={true}
        ></Image>
        </div>
        <div className="relative basis-1/2">
          <h1 className="m-4 mt-10 laptop:mt-4 text-4xl">About Me</h1>
          <p className="m-6 text-md laptop:text-xl">
            I am a graduate of Arlington High School and am currently employed at
            {" "}
            <Link href="https://hvpcorp.com">
            <a className={theme === "dark" ? "text-link-dark" : "text-link-light"} target="_blank" rel="noopener noreferrer">Hudson Valley Preservation (HVP).</a>
            </Link>
            {" "}
            Since a young age, I have found great pride and satisfaction in creating things with my own two hands.  I joined HVP to expand my
            carpentry skills and understanding of building science. In my free time, I build woodworking projects for family and friends.
            I aspire to one day sustain a successful career by working with wood everyday.
          </p>

        </div>
      </div>
    </>
  );
};

export default About;