import React from "react";

export const Work = () => {
  return (
    <section name="Work" className="text-white py-12 px-2 max-w-screen h-full">
      <article>
        <h3 className="uppercase text-sm font-semibold text-gray-400">
          Work Experience
        </h3>
        <h2 className="text-3xl font-bold mt-2">
          Institutions I have worked for in the past
        </h2>
        <section className="grid gap-12 mt-12 sm:grid-cols-4">
          <article>
            <span className="text-8xl text-gray-400">01</span>
            <h3 className="taxt-xl font-semibold mb-4">
              <span className="text-blue-500 font-semibold">
                DIF National System
              </span>
              , Scrum Master
            </h3>
            <p className="text-sm">
              I currently am the lead designer on the interaction design team
              for Google Play.
            </p>
          </article>

          <article>
            <span className="text-8xl text-gray-400">02</span>
            <h3 className="taxt-xl font-semibold mb-4">
              <span className="text-blue-500 font-semibold">
                Secretary of Education Science and Technology
              </span>
              , Data Analyst
            </h3>
            <p className="text-sm">
              I’ve worked on a wide variety of internal tools for facebook over
              the past 6 years.
            </p>
          </article>

          <article>
            <span className="text-8xl text-gray-400">03</span>
            <h3 className="taxt-xl font-semibold mb-4">
              <span className="text-blue-500 font-semibold">
                National Autonomous University of Mexico
              </span>
              , Scrum Master
            </h3>
            <p className="text-sm">
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </p>
          </article>

          <article>
            <span className="text-8xl text-gray-400">04</span>
            <h3 className="taxt-xl font-semibold mb-4">
              <span className="text-blue-500 font-semibold">
                Nature and Mexican Ecosystems
              </span>
              , Social Service
            </h3>
            <p className="text-sm">
              I started my design career with Dribbble. I was incharge of
              creating illustrations for the platform.
            </p>
          </article>
        </section>
      </article>
    </section>
  );
};
