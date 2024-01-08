import { useRef } from "react";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import About from "../components/About"
import { useTheme } from "next-themes";
import MovingHeader from "../components/MovingHeader"

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const textOne = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  
  useIsomorphicLayoutEffect(() => {
    stagger(
      textOne.current,
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const { theme } = useTheme();

  return (
    <div className={`relative
    ${theme === "dark" ? "bg-zinc-800 text-white" : "bg-[#D5B59C] text-black"}
    `}>

      <Head>
        <title>{data.name}</title>
      </Head>

      {/* <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div> */}
      <MovingHeader
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
        handleProjectScroll={handleProjectScroll}
      />

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full"
            >
              {data.headerTaglineOne}
            </h1>
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <Socials className="mt-2 laptop:mt-5" />
        </div>


        <div className="mt-10 laptop:mt-10 p-2 laptop:p-0" ref={aboutRef}>
        <About />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-4xl m-2 text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {data.work.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={projectRef}>
          <h1 className="text-4xl m-2 text-bold">Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
