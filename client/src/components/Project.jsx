import React from 'react';
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <>
      <h1 className="text-4xl font-bold my-10 ml-34 text-white">Projects</h1>
      <div className='flex flex-wrap justify-center gap-5'>
        <ProjectCard title={"Wanderlust"} link={"https://wanderlust-project-mkol.onrender.com/listings"}>
          Fullstack web app for listing and searching hotels.
        </ProjectCard>
      </div>

    </>
  );
}

export default Project;
