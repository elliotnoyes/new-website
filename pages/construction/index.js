import { useRef } from "react";
import { useRouter } from "next/router";
import WorkCard from "../../components/WorkCard"
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Footer from "../../components/Footer";
import CustomHead from "../../components/CustomHead";
import { useTheme } from "next-themes";
import SimplePageHeader from "../../components/SimplePageHeader"
import { getAllPosts } from "../../utils/fetch";

const ConstrPage = ({ posts }) => {
  
  const textOne = useRef();
  const router = useRouter();
  
  useIsomorphicLayoutEffect(() => {
    stagger(
      textOne.current,
      1,
      { y: -40, x: -10, transform: "scale(0.8)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const { theme } = useTheme();

  return (
    <div className={`relative min-h-screen
    ${theme === "dark" ? "bg-stone-700 text-white" : "bg-stone-200 text-black"}
    `}>

      <CustomHead />

      <SimplePageHeader/>

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-librecaslon w-4/5 mob:w-full text-center"
            >
              Construction
            </h1>
          </div>
        </div>
        
        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {posts.map((project) => (
              project.category === "Construction" && (
                <WorkCard
                key={project.date}
                img={project.coverImage}
                name={project.title}
                onClick={() => router.push(`/${project.slug}`)}
                />
              )
            ))}
          </div>
        
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "date",
    "category",
    "title",
    "description",
    "coverImage",
    "grid",
    "imageList"
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default ConstrPage;