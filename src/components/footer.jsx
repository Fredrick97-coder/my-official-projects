import React from 'react';

function Footer() {
  return (
    <div className="h-[70px] bg-[#1e1e1e] w-screen">
      <div className="flex justify-center items-center h-full">
        <p className="animate__animated animate__backInUp text-white text-md">
          &copy; {new Date().getFullYear()} mD-coders
        </p>
      </div>
    </div>
  );
}

export default Footer;
