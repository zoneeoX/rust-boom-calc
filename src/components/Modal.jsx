import React, { useState } from "react";

import c4 from "../assets/picture/c4.png";
import explosive from "../assets/picture/explosive.png";
import rocket from "../assets/picture/rocket.png";
import satchel from "../assets/picture/satchel.png";

const Modal = ({ setIsModal }) => {
  const [items, setItems] = useState([
    {
      name: "C4",
      picture: c4,
      material: [
        {
          metal_fragments: 200,
          tech_trash: 2,
          sulfur: 2200,
          cloth: 20,
          animal_fat: 45,
          charcoal: 3000,
        },
      ],
    },
    {
      name: "Explosive Ammo",
      picture: explosive,
      material: [
        {
          metal_fragments: 10,
          sulfur: 50,
          charcoal: 60,
        },
      ],
    },
    {
      name: "Rocket",
      picture: rocket,
      material: [
        {
          metal_fragmnets: 100,
          metal_pipe: 2,
          sulfur: 1400,
          charcoal: 1950,
          cloth: 8,
          animal_fat: 24,
        },
      ],
    },
    {
      name: "Satchel",
      picture: satchel,
      material: [
        {
          metal_fragments: 80,
          rope: 1,
          sulfur: 480,
          charcoal: 720,
          cloth: 10,
        },
      ],
    },
  ]);
  const [image, setImage] = useState("");
  const [selectedBoom, setSelectedBoom] = useState();
  const [active, setActive] = useState(false);

  function closeModal() {
    setIsModal((prevState) => !prevState);
  }

  function imageSet(e) {
    setImage(e.target.src);
    const targetedItem = e.target.alt;
    const currentObject = items.find((x) => x.name == targetedItem);

    //Grabs and set the object from array[item]
    setSelectedBoom(currentObject);
    setActive(true);
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
        </div>
        {active ? (
          <div className="flex flex-row mt-10">
            <img
              src={image}
              alt=""
              className="w-8 p-1 cursor-pointer bg-white/10 hover:bg-white/20 "
            />
            <input
              type="text"
              className="col-span-4 p-1 font-sans bg-neutral-700 active:outline-none focus:outline-none"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
