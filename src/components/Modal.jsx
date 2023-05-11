import React, { useState } from "react";

import c4 from "../assets/picture/c4.png";
import explosive from "../assets/picture/explosive.png";
import rocket from "../assets/picture/rocket.png";
import satchel from "../assets/picture/satchel.png";

const Modal = ({ setIsModal }) => {
  const [items, setItems] = useState([
    {
      name: "c4",
      picture: c4,
    },
    {
      name: "explosive",
      picture: explosive,
    },
    {
      name: "rocket",
      picture: rocket,
    },
    {
      name: "satchel",
      picture: satchel,
    },
  ]);
  const [image, setImage] = useState("");
  const [active, setActive] = useState(false);

  function closeModal() {
    setIsModal((prevState) => !prevState);
  }

  function imageSet(e) {
    setImage(e.target.src);
    setActive((prevState) => !prevState);
  }

  return (
    <div className="fixed flex items-center justify-center w-screen h-screen p-10 bg-black/20 backdrop-blur-md font-Bebas">
      <div className="bg-neutral-800 min-w-[30vw] h-fit p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl tracking-wider opacity-50">
            Available Booms
          </h1>
          <p
            className="text-2xl tracking-wider cursor-pointer text-red-400/50"
            onClick={closeModal}
          >
            Close
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 pt-10">
          {items.map((items, id) => (
            <div className="p-2 rounded cursor-pointer bg-neutral-900 w-fit h-fit hover:bg-neutral-700">
              <img
                src={items.picture}
                alt={items.name}
                className="w-14"
                onClick={(e) => imageSet(e)}
              />
            </div>
          ))}
          <div className="flex flex-row gap-2">
            <img
              src={image}
              alt=""
              className="w-8 p-1 cursor-pointer bg-white/10 hover:bg-white/20 border-r-[1px] border-white/50"
            />
            <input
              type="text"
              className="col-span-4 p-1 font-sans bg-neutral-700 active:outline-none focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
