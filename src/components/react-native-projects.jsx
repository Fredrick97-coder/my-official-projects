import React from 'react';
import { reactProjects } from '../data/products';

function ReactNativeProjects() {
  return (
    <section className="grid grid-cols-3 gap-3 mx-2">
      {reactProjects.map((project) => (
        <div key={project.id} className="my-4">
          <img
            src={project.image}
            alt={project.name}
            className={`${project?.className?.image} rounded-xl shadow-lg`}
          />
          <div className="px-3">
            <div className={`${project?.className?.text} flex justify-between`}>
              <h1 className="text-lg font-semibold">{project.name}</h1>
              <h1>{project.price}</h1>
            </div>
            <div
              className={`${
                project.lang.toLowerCase() === 'javascript'
                  ? 'bg-[#F0DB4F] text-black'
                  : 'bg-[#007acc] text-white'
              } w-20 rounded-full py-1 px-12 flex justify-center items-center`}
            >
              {project.lang}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ReactNativeProjects;
