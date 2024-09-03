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
            src={"/images/profile_pic.webp"}
            width={400}
            height={400}
            priority={true}
        ></Image>
        </div>
        <div className="relative basis-1/2">
          <h1 className="m-4 mt-10 laptop:mt-4 text-4xl">About Me</h1>
          <p className="m-6 text-md laptop:text-xl">
          I began working with my hands at a young age and have come to enjoy the act of producing tangible work. 
          I have explored many facets, including construction, carpentry, furniture making, cabinetry, etc. 
          and have learned to appreciate each in their own way. This site is a compilation of some of the work I have completed. 
          I am currently employed at a construction/historic preservation company,
            {" "}
            <Link href="https://hvpcorp.com">
            <a className={theme === "dark" ? "text-link-dark" : "text-link-light"} target="_blank" rel="noopener noreferrer">Hudson Valley Preservation (HVP)</a>
            </Link>
            {" "}
            , where I have expanded my carpentry skills and knowledge of building science. 
            I aspire to one day sustain a fulfilling career, working with my hands and producing high quality work.

          </p>

        </div>
      </div>
    </>
  );
};

export default About;