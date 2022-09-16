import React from 'react';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { headerLinks } from '../data/links';

window.addEventListener('scroll', () => {
  const section = document.querySelector('section');
  if (window.scrollY > 400) {
    section.classList.add('bg-[#1e1e1e]', 'shadow-sm');
  } else {
    section.classList.remove('bg-[#1e1e1e]', 'shadow-sm');
  }
});

function Header() {
  return (
    <section className="fixed top-0 left-0 right-0 z-50  py-2 ">
      {/* logo */}
      <div className="mx-auto flex justify-between self-center w-[70%] items-center">
        <h1 className="text-2xl text-white">
          <span className="text-orange-300 font-semibold">mD</span>-coders
        </h1>
        {/* nav */}
        <ul className="flex flex-row items-center gap-5">
          {headerLinks.map((link, index) => (
            <li className={link.className}>
              <a href={link.href}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Header;
