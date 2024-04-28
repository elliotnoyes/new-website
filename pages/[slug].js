import React, { useRef } from "react";
import { getPostBySlug, getAllPosts } from "../utils/fetch";
import Footer from "../components/Footer";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import { useTheme } from "next-themes";
import CustomHead from "../components/CustomHead";
import ProjectPageHeader from "../components/ProjectPageHeader";
import GalleryCard from "../components/GalleryCard";

const ProjectPage = ({ post }) => {

  const textOne = useRef();

  const gridSizeVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };
  
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

      <ProjectPageHeader backName={post.category} />

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-librecaslon w-4/5 mob:w-full text-center"
            >
              {post.title}
            </h1>
          </div>
        </div>


        <div className="flex justify-center mt-4 p-2 laptop:p-1">
          <p className="tablet:w-2/3 m-6 text-sm laptop:text-lg">
          {post.description}
          </p>
        </div>

        <div>
          {post.grid.map((cols, idx) => {
            const start = idx === 0 ? 0 : post.grid.slice(0, idx).reduce((acc, curr) => acc + curr, 0);
            const end = start + cols;
            return (
              <div key={idx} className={`mt-5 laptop:mt-10 grid ${gridSizeVariants[cols]} gap-4`}>
                {post.imageList.slice(start, end).map((img) => (
                  <GalleryCard
                    key={img.id}
                    img={img.image}
                    AR_src={img.AR_src}
                    w_disp={img.w_disp}
                    h_disp={img.h_disp}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* <div>
          {Array.isArray(post.grid)
            ? post.grid.map((cols, idx) => {
                const start = idx === 0 ? 0 : post.grid.slice(0, idx).reduce((acc, curr) => acc + curr, 0);
                const end = start + cols;
                return (
                  <div key={idx} className={`mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-${cols} gap-4`}>
                    {post.imageList.slice(start, end).map((img) => (
                      <GalleryCard
                        key={img.id}
                        img={img.image}
                        AR_src={img.AR_src}
                        w_disp={img.w_disp}
                        h_disp={img.h_disp}
                      />
                    ))}
                  </div>
                );
              })
            : (<div className={`mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-${post.grid} gap-4`}>
                {post.imageList.map((img) => (
                  <GalleryCard
                    key={img.id}
                    img={img.image}
                    AR_src={img.AR_src}
                    w_disp={img.w_disp}
                    h_disp={img.h_disp}
                  />
                ))}
              </div>)
          }
        </div> */}

        <Footer />

      </div>
    </div>

  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
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
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default ProjectPage;

