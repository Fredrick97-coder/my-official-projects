import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { cardLinks } from '../data/links';

function ProjectCards() {
  const [toggleActive, setToggleActive] = useState({
    reactNative: true,
    expo: false,
    web: false,
  });

  const handleToggle = (e) => {
    const { name } = e.target;

    setToggleActive({
      reactNative: name === 'reactNative' ? true : false,
      expo: name === 'expo' ? true : false,
      web: name === 'web' ? true : false,
    });
  };

  return (
    <section className="relative flex self-center justify-center">
      <div className="mt-[-50px] mb-[50px] w-[70%] bg-white shadow-md ">
        <ul className="flex my-5">
          {cardLinks.map((link, index) => (
            <Link
              to={link.path}
              name={link.name}
              className={`${
                toggleActive[`${link.name}`]
                  ? 'bg-[#2a2a2a] shadow-xl text-white'
                  : null
              } card-link py-4 px-6 mx-2 rounded-full `}
              onClick={toggleActive[`${link.name}`] ? null : handleToggle}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default ProjectCards;
