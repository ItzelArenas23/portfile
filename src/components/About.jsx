import React from "react";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section name="About" className="bg-[url('/images/About.jpg')] max-w-screen mx-auto h-full text-white sm:grid sm:grid-cols-2">
      <article className="xl:px-11 text-gray-700 py-10 px-2 grid gap-12 sm:grid sm:content-between">
        <div>
          <h3 className="text-4xl font-bold inline border-b-2 border-gray-700">
            About me
          </h3>
          <p className="mt-5" text-gray-500>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nemo modi perferendis unde, porro neque cupiditate excepturi rem
            voluptatibus doloribus, reprehenderit earum placeat quas saepe
            aliquam quae? Dolores, aperiam laboriosam.
          </p>
        </div>

        <a
          download="Itzel-Resume.pdf"
          href="/images/Itzel-Resume.pdf"
          className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-2 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-cyan-900 hover:bg-cyan-500 text-gray-600 hover:text-white duration-500"
        >
          <button className="cursor-pointer text-sm sm:text-lg font-general-medium duration-100 flex items-center">
            <i className="bx bx-down-arrow-circle mx-1 px-1"></i>
            Download CV
          </button>
        </a>
      </article>

      <article>
        <img
          className="w-full h-[300px] object-cover"
          src="/images/girlwork.png"
          alt=""
        />
      </article>

      <ScrollLink to="Skills" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
            </ScrollLink>

    </section>
  );
};

export default About;
