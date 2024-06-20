import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto p-8 mt-12 flex justify-center items-center flex-col">
      <h1 className="text-green-900 text-4xl font-bold">Contact me!</h1>
      <section className="flex justify-center items-center mt-5 gap-6">
        <a
          href="https://twitter.com/"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 p-2 mt-4 rounded-md w-max hover:bg-black hover:text-white animate-bounce transition-all"
        >
          {/* single social link */}
          <FaXTwitter />
          <span>Twitter</span>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 p-2 mt-4 rounded-md w-max hover:bg-black hover:text-white animate-bounce transition-all"
        >
          {/* single social link */}
          <FaGithub />
          <span>Github</span>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 p-2 mt-4 rounded-md w-max hover:bg-black hover:text-white animate-bounce transition-all"
        >
          {/* single social link */}
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
      </section>
    </div>
  );
};

export default Contact;
