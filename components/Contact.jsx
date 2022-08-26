import Image from "next/image";
import React from "react";

import contactUs from '../public/assets/contact-us.jpg'

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white">

            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                <Image 
                    src={contactUs} 
                    alt='man with laptop' 
                    className="rounded-xl" 
                />
            </div>


            {/* form */}
            <div className="w-full md:w-1/2 h-full rounded-xl p-4"></div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
