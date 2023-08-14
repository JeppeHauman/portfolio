import Link from "next/link";
import { projects } from "@/projects";
import ScrollButton from "./scrollButton";

export default function Home() {
  return (
    <main>
      <header className="h-screen snap-start bg-black bg-[url('/1692022152691.png')] bg-fixed bg-left bg-no-repeat text-stone-100">
        <div className="flex h-full flex-col items-center justify-center gap-20 ">
          <h1 className="text-center text-4xl font-bold md:text-7xl">
            Jeppe Hauman
            <br className="my-10" />
            Software Engineer
          </h1>
          <p className="max-w-lg border-white border-opacity-50 bg-black bg-opacity-20 p-5 px-5 text-center backdrop-blur-sm sm:rounded-lg sm:border">
            A skilled and passionate software engineer experienced in delivering
            robust and user-centric applications. Explore my work to witness my
            dedication to crafting elegant code and creating impactful digital
            experiences.
          </p>

          <div className="group">
            <ScrollButton />
            {/* <Link
              className="rounded-md border-2 border-stone-300 px-3 py-1 text-xl transition-all ease-in-out hover:border-transparent hover:bg-white hover:text-black"
              href={"#projects"}
            >
              My Work
            </Link> */}

            <svg
              className="absolute bottom-16 right-1/2 hidden translate-x-1/2 group-hover:transition-opacity group-hover:delay-150 group-hover:duration-300 group-hover:ease-in-out lg:block lg:opacity-0 lg:group-hover:block lg:group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>
      <div id="projects" className="flex min-h-screen w-full justify-center">
        <div className="grid w-full place-content-center content-center gap-10 p-4 lg:max-w-5xl lg:grid-cols-2 lg:gap-10 lg:p-10">
          {projects.map((project, i) => (
            <div className="flex flex-col justify-between" key={i}>
              <div className="mb-1 pl-1">
                <Link href={project.url} target="_blank">
                  <h3 className="my-2 text-xl underline lg:text-2xl lg:no-underline">
                    {project.title}
                  </h3>
                </Link>
                <p className="mt-2">{project.description}</p>
              </div>
              <div>
                <div className="relative overflow-hidden rounded-md">
                  <Link
                    target="_blank"
                    href={project.url}
                    className="group rounded-md after:rounded-lg after:opacity-0 hover:after:absolute hover:after:right-1/2 hover:after:top-1/2 hover:after:block hover:after:-translate-y-1/2 hover:after:translate-x-1/2 hover:after:border-2 hover:after:px-3 hover:after:py-1 hover:after:opacity-100 hover:after:transition-opacity hover:after:duration-1000 hover:after:ease-in-out hover:after:content-['Visit']"
                  >
                    <img
                      className="rounded-md object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-40 lg:h-64"
                      src={project.img}
                      alt={`Screenshot of ${project.title}s website`}
                    />
                  </Link>
                </div>
                <div className="mt-1 flex items-center gap-2 pl-1">
                  Tech used:
                  {project.tech.map((tech, i) =>
                    tech === "NewscatcherAPI" ? (
                      <span key={i}>NewscatcherAPI</span>
                    ) : (
                      <img
                        className="max-h-4"
                        key={i}
                        src={`/logos/${tech.toLowerCase()}.svg`}
                        alt={tech}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
