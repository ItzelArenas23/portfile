import React from 'react'
import cart from '../assets/portfolio/cart.png'
import infogalax from '../assets/portfolio/infogalax.png'
import weather from '../assets/portfolio/weather.png'
import portal from '../assets/portfolio/portal.png'
import crud from '../assets/portfolio/crud.png'
import pokemon from '../assets/portfolio/pokemon.png'

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        title: 'E-commerce',
        src: cart,
        link: 'https://carrito-shop-03.netlify.app/',
        repo: 'https://github.com/GamalielF/proyectoCarrito'
      },
      {
        id: 2,
        title: 'Universe facts',
        src: infogalax,
        link: 'https://unrivaled-capybara-3cd1d5.netlify.app/',
        repo: 'https://github.com/ItzelArenas23/React_entregable01'
      },
      {
        id: 3,
        title: 'Weather',
        src: weather,
        link: 'https://rainbow-chimera-8c3450.netlify.app/',
        repo: 'https://github.com/ItzelArenas23/React_entregable02'
      },
      {
        id: 4,
        title: 'Rick and Morty',
        src: portal,
        link: 'http://gorgeous-marshmallow-8b15ac.netlify.app/',
        repo: 'https://github.com/ItzelArenas23/React_entregable03'
      },
      {
        id: 5,
        title: 'CRUD',
        src: crud,
        link: 'https://hilarious-bubblegum-33e78e.netlify.app',
        repo: 'https://github.com/ItzelArenas23/React_entregable04'
      },
      {
        id: 6,
        title: 'Pokemon',
        src: pokemon,
        link: 'https://radiant-seahorse-94a121.netlify.app/',
        repo: 'https://github.com/ItzelArenas23/React_entregable05'
      },
    ];
  
    return (
      <div name="Portfolio" className="bg-[url('/images/1y2.jpg')] max-w-screen h-full text-white portfolio mt-10">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline py-2 border-b-2 border-white">
              Proyects
            </p>
            <p className="py-6">Check out the proyects I've work on</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 relative">
            {portfolios.map(({ id, title, src, link }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="projects"
                  className="rounded-t-lg duration-200"
                />
                <div>
                <h2 className='text-white text-2xl font-semibold mt-2 flex items-center justify-center px-10'>{title}</h2>
                </div>
                <div className="flex items-center justify-center px-10">
                  <hr />
                  <button className="max-w-max p-6 font-general-medium flex justify-center items-center w-36 sm:w-48 mt-3 mb-6 sm:mb-4 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-cyan-900 hover:bg-cyan-500 text-gray-600 hover:text-white duration-500 md:mb-3 sm:mb" onClick={ () => window.open(link, '_blank')}>
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  