"use client";

import ProjectCard from "./project-card";
import projects from "./projects.json";
import FloatingWrapper from "./floating-wrapper";

export default function Projects() {
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return (
      <div className="text-center p-8 text-red-500">
        Error: Projects data is missing or invalid
      </div>
    );
  }

  return (
    <main className="w-full flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <FloatingWrapper key={project.id}>
            <ProjectCard project={project} />
          </FloatingWrapper>
        ))}
      </div>
    </main>
  );
}
