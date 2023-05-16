import React from "react";

const Skills = () => {
  return (
    <section name="Skills" className="bg-[url('/images/Portafolio.jpg')] max-w-screen h-full">
    <section className="max-w-screen-lg mx-auto p-4">
      <h3 className="text-white text-4xl font-bold inline border-b-2 border-white">Skills</h3>
    </section>

    <section className="max-w-screen-lg mx-auto p-4 md:grid md:grid-cols-2">
    <section className="text-white font-bold text-3xl px-20 py-15">
        {/* Sección de tecnologias que uso logos */}
        <section>
        <article>
            <h3 className="font-bold text-3xl">Technical Skills</h3>
            <p className="mt-5 font-light text-xl">These are the technologies I've worked with and used in my projects:</p>
        </article>  
        </section>

        <section className="grid grid-cols-2 mt-10 mb-20 gap-10">
        <div className="aspect-square grid place-content-center">
          <img src="../skills/html.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center">
          <img src="../skills/css.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center">
          <img src="../skills/javascript.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center">
          <img src="../skills/react.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center">
          <img src="../skills/github.png" alt="" />
        </div>

        <div className="aspect-square grid place-content-center">
          <img src="../skills/tailwind.png" alt="" />
        </div>
        </section>
      </section>

      <section className="text-white px-20 py-15">
        {/* Sección de servicios o profesional skills */}
        <section>
          <article>
            <h3 className="font-bold text-3xl">Profesional Skills</h3>
            <p className="text-gray-400 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, nemo explicabo delectus impedit adipisci corporis id, aspernatur possimus eum quidem molestias alias obcaecati, quia aperiam beatae temporibus modi doloremque minus!
            </p>
          </article>
        </section>

        <section className="grid gap-4 pt-6">
          <article>
            <h3 className="text-2xl font-semibold my-3">Comunication</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam soluta fugit facilis eum unde non reprehenderit labore omnis, harum pariatur, aliquam rem ad consequuntur eos quod quis. Enim, nam?</p>
          </article>
         

          <article>
            <h3 className="text-2xl font-semibold my-3">Team work</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis delectus magni, perferendis aliquid, corporis quaerat amet aliquam, non maiores explicabo fuga repellendus. At numquam maiores neque nam iusto amet corporis.</p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold my-3">Interdisciplinary projects</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore cumque nam obcaecati similique deleniti accusantium blanditiis? Mollitia corrupti commodi eaque eos quod quia culpa doloribus temporibus? Placeat, aliquam quidem.</p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold my-3">Analisis</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eius corrupti, ratione, consequatur minus accusamus quas sint amet voluptatibus et repudiandae at dolores veniam, voluptate exercitationem incidunt natus pariatur similique?</p>
          </article>
        </section>
      </section>
    </section>

      
    </section>
  );
};

export default Skills;
