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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"> 
      {projects.map((project) => (
        <FloatingWrapper key={project.id}>
          <ProjectCard project={project} />
        </FloatingWrapper>
      ))}
    </div>
  );
}
