import React from "react";

const About = () => {
  return (
    <div className="bg-white from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans leading-relaxed min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 bg-opacity-75 rounded-xl shadow-2xl backdrop-filter backdrop-blur-md">
        <h1 className="text-4xl font-bold text-teal-400 mb-4 text-center">
          🌟 Welcome to the Quirky World of Code! 🌟
        </h1>
        <p className="text-xl mb-4 text-center">
          Where bugs are features in disguise and coffee is the elixir that
          fuels my late-night commits! 🚀
        </p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-teal-300 mb-2">
            👋 Hi there! I'm [Daniel Finn]
          </h2>
          <p className="text-lg mb-4">
            A software developer by day, code magician by night, and a caffeine
            addict 24/7. ☕ Armed with my keyboard and a sense of humor, I'm on
            a mission to turn coffee into code and dreams into functions that
            actually work! 💻✨
          </p>

          <p className="text-lg mb-4">
            My coding journey began with{" "}
            <code className="bg-gray-700 px-1 rounded">"Hello, World!"</code>{" "}
            and has since evolved into crafting elegant solutions to complex
            problems, all while sprinkling in a dash of wit and a pinch of
            sarcasm (for debugging purposes, of course). From debugging cryptic
            errors to debating tabs versus spaces (it's spaces, fight me! 🔥), I
            thrive in the art of turning ideas into functional, delightful
            software. 🎨🛠️
          </p>

          <p className="text-lg mb-4">
            When I'm not crafting algorithms or untangling spaghetti code,
            you'll find me geeking out over the latest tech trends, exploring
            new programming languages just for fun, or diving headfirst into the
            endless abyss of Stack Overflow threads (because who doesn't love a
            good coding puzzle? 🧩).
          </p>

          <p className="text-lg mb-4">
            As a lifelong learner, I believe in continuous improvement and
            staying updated with the latest tech stack trends faster than you
            can say{" "}
            <code className="bg-gray-700 px-1 rounded">
              "Agile development."
            </code>{" "}
            🚀 Whether it's mastering the art of Git-fu or attending hackathons
            to invent the next big thing (or at least the next meme generator
            🤖), I'm always up for a challenge.
          </p>

          <p className="text-lg mb-4">
            Beyond the terminal window, I'm an advocate for clean code,
            user-centric design, and creating software that not only functions
            flawlessly but also brings a smile to users' faces. 😊 Because let's
            be real, a well-placed Easter egg or a witty error message can make
            all the difference between a good program and an unforgettable one.
          </p>

          <p className="text-lg mb-4">
            So, if you're looking for someone to turn your wild ideas into lines
            of code, sprinkle some humor into your tech team, or just debate the
            merits of Python over pizza 🍕, let's connect! Because in this
            digital age, laughter might just be the best debugging tool we have.
            Let's code, laugh, and change the world—one line of code at a time!
            🌍💻
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
