import Image from "next/image";
import Link from "next/link";
import { projects } from "@/projects";

export default function Home() {
  return (
    <main>
      <header className="h-screen snap-start bg-[url('/ffflux.svg')] bg-cover bg-center bg-no-repeat text-stone-100">
        <div className="flex h-full flex-col items-center justify-center gap-20">
          <h1 className="text-center text-4xl md:text-7xl">
            Jeppe Hauman
            <br className="my-10" />
            Software Engineer
          </h1>
          <p className="text-center">
            I'm great! Hire me and I will make your project run a little slower
            each day
          </p>
          <Link
            className="border-2 border-stone-300 px-4 text-xl hover:border-transparent hover:bg-white hover:text-black"
            href={"/"}
          >
            My Work
          </Link>
        </div>
      </header>
      <div className="flex h-screen w-full snap-start justify-center">
        <div className="grid grid-cols-2">
          {projects.map((project) => (
            <div>
              <img
                src={project.img}
                alt={`Screenshot of ${project.title}s website`}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex gap-2">
                {project.tech.map((tech) => (
                  <img src={`/logos/${tech.toLowerCase()}.svg`} alt={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
