
import { React, useState } from "react";


export { default as Home } from "./home/home";
export { default as About } from "./about/about";
export { default as Contact } from "./contact/contact";
export { default as Auth } from "./auth/auth";
export { default as Cart } from "./cart/cart";
export { default as Products } from "./products/products";
export { default as Design } from "./design/design";





function Home() {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <figure className="card relative w-425 h-225 bg-black rounded-8">
        <img src={""} alt="..." className="card_image block w-full h-full object-cover object-center rounded-inherit transition-transform duration-250" />
        <figcaption className="card_body inset-0 z-[-1] flex items-end justify-between px-24 text-yellow-500">
          <div>
            <h2 className="card_category text-white">John Doe</h2>
            <p className="card_author text-yellow-500">Software Engineer</p>
          </div>
          <a href="#" className="card_button inline-block text-decoration-none rounded-4 bg-yellow-500 px-10 py-15 text-black" onClick={handleInfoClick}>
            More Info
          </a>
        </figcaption>
      </figure>

      {showInfo && (
        <p className="text-base md:text-lg text-gray-400">
          The lead developer of our team, Ajeesh is also proficient with multiple programming languages. With his knowledge in architectural and developing segments, we are confident we were able to put out a great website for users with quality codes in no time.
        </p>
      )}
    </div>
  );
}

export default Home;
