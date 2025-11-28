'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link"

const ProjectCard = ({ project }) => {

  return (
    <div>
        <div className="flex flex-col gap-6 items-center my-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-Mint-Light">
                {project.title}
            </h2>

            <div className="flex flex-col-reverse md:flex-row items-center gap-6">

                <p className="text-center p-4 rounded-xl w-sm md:w-44 bg-Dark-Navy/50 text-white/70">
                    {project.description}
                </p>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-4 items-start">
                        <Link
                            href={project.demo}
                            target="_blank"
                            className="hidden md:inline-flex gap-2 text-Aqua-Neon font-bold transition hover:scale-105"
                        >
                            &lt;{" "}Live Demo/&gt;
                        </Link>
                        
                        <div  className="relative place-self-center w-64 h-40 rounded-xl overflow-hidden ">                  
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="256px"
                                className="object-cover"
                            />
                        </div>
                        
                        <div className="flex w-sm justify-between">
                            <Link
                                href={project.github}
                                target="_blank"
                                className="inline-flex gap-2 text-Vivid-Orange font-bold transition hover:scale-105"
                            >
                                &lt;{" "}GitHub/&gt;
                            </Link>

                            <Link
                                href={project.demo}
                                target="_blank"
                                className="inline-flex md:hidden justify-self-end gap-2 text-Aqua-Neon font-bold transition hover:scale-105"
                            >
                                &lt;{" "}Live Demo/&gt;
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    </div>
  )
}

export default ProjectCard