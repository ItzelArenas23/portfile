import React from "react";

function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div name="Contact" className='contact max-w-screen h-full bg-[url("/images/bgheader.jpg")] p-4 text-white'>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline py-2 border-b-2 border-white">
            Contact
          </p>
          <p className="mt-10">
            For more information and work in projects together email me at <span className="font-medium underline underline-offset decoration-wavy">itzelarenas23@gmail.com</span>
          </p>
          <p className="mt-4">Or if you preffer, send me a quick message with your contact datails here and I’ll get in touch</p>
        </div>
        
        <div>
          <form
            onSubmit={handleSubmit}
            id="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >
            <label htmlFor="name" className="text-lg grid">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label htmlFor="email" className="text-lg mt-5">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label htmlFor="subject" className="text-lg mt-5">Subject</label>
            <input
              type="subject"
              id="subject"
              placeholder="Subject"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <label htmlFor="message" className="text-lg mt-5">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className='max-w-max p-6 font-general-medium flex justify-center items-center w-36 sm:w-48 mt-3 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-cyan-900 hover:bg-cyan-500 text-gray-600 hover:text-white duration-500'> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;