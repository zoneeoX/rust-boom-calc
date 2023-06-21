import React, { useState } from "react";
import StoneWall from "../assets/picture/StoneWall.jpg";
import MetalWall from "../assets/picture/MetalWall.jpg";
import WoodWall from "../assets/picture/WoodWall.jpg";

const Modal = ({
  setIsModal,
  setSelectedBoom,
  setBoomAmount,
  items,
  setItems,
  setInputList,
  currentInput,
  inputList,
  boomAmount,
  selectedBoom,
  setMatArr,
}) => {
  // const [items, setItems] = useState([
  //   {
  //     name: "C4",
  //     picture: c4,
  //     material: [
  //       {
  //         metal_fragments: 200,
  //         tech_trash: 2,
  //         sulfur: 2200,
  //         cloth: 20,
  //         animal_fat: 45,
  //         charcoal: 3000,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Explosive Ammo",
  //     picture: explosive,
  //     material: [
  //       {
  //         metal_fragments: 10,
  //         sulfur: 50,
  //         charcoal: 60,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Rocket",
  //     picture: rocket,
  //     material: [
  //       {
  //         metal_fragmnets: 100,
  //         metal_pipe: 2,
  //         sulfur: 1400,
  //         charcoal: 1950,
  //         cloth: 8,
  //         animal_fat: 24,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Satchel",
  //     picture: satchel,
  //     material: [
  //       {
  //         metal_fragments: 80,
  //         rope: 1,
  //         sulfur: 480,
  //         charcoal: 720,
  //         cloth: 10,
  //       },
  //     ],
  //   },
  // ]);

  // function sumOfValues({ a, b, c }) {
  //   let sumOfValues = (a * b * c)
  //   return sumOfValues
  // }

  // let testObject = {
  //   'a': 4,
  //   'b': 10,
  //   'c': 5
  // }

  // console.log(sumOfValues(testObject))

  const [image, setImage] = useState("");
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState();
  const [totalPerBoom, setTotalPerBoom] = useState([]);

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

  function setAmount(e) {
    setBoomAmount(e.currentTarget.value);
  }

  function changeMode() {
    setMode((prevState) => !prevState);
  }

  //multiply mats with amount
  //put in one array
  //sum the array with the same key, if it doesnt have the same key leave it be
  //https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjLnOibj6r_AhWa1DgGHczwB3sQrAIoA3oECAoQBA&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F62852082%2Fhow-to-multiply-object-values-and-retain-their-keys-in-es6&usg=AOvVaw1LdL_2wMnT2LPcfu3zUM0A
  //how to multiply object value

  //method 2
  //sum every key charcoal, metal, etc... and put it in a state and display it // much simpler

  function saved() {
    setInputList(inputList.filter((item) => item.id !== currentInput.id));

    // for(let key of Object.keys(selectedBoom.material)){
    //   setTotalPerBoom(oldArr => [...oldArr, boomAmount * selectedBoom.material[key]])
    // }

    //   console.log(selectedBoom.material)

    const multipliedByAmount = Object.fromEntries(
      Object.entries(selectedBoom.material).map(([name, value]) => [
        name,
        value * boomAmount,
      ])
    );

    // console.log(multipliedByAmount)

    //   let total = {}
    //   for (const key in selectedBoom.material) {
    //     console.log(total[key] = selectedBoom.material[key] * boomAmount);
    // }

    setInputList((oldArray) => [
      ...oldArray,
      {
        id: currentInput.id,
        name: "Slot " + currentInput.id,
        image: image,
        currentItem: selectedBoom.name,
        materials: multipliedByAmount,
        amountItem: boomAmount,
        stone_wall: boomAmount / (selectedBoom.name === 'Rocket' ? 4 : selectedBoom.name === 'C4' ? 2 : selectedBoom.name === 'Satchel' ? 10 : selectedBoom.name === 'Explosive Ammo' ? 186 : "" ),
        metal_wall: boomAmount / (selectedBoom.name === 'Rocket' ? 8 : selectedBoom.name === 'C4' ? 4 : selectedBoom.name === 'Satchel' ? 18 : selectedBoom.name === 'Explosive Ammo' ? 417 : "" ),
        high_wall: boomAmount / (selectedBoom.name === 'Rocket' ? 15 : selectedBoom.name === 'C4' ? 8 : selectedBoom.name === 'Satchel' ? 35 : selectedBoom.name === 'Explosive Ammo' ? 800 : "" ),

      },
    ]);

    setMatArr((oldArray) => [...oldArray, selectedBoom.material]);

    setIsModal(false);
  }

  return (
    <div className="fixed flex items-center justify-center w-screen h-screen p-10 bg-black/20 backdrop-blur-md font-Bebas z-50">
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

        <div className="flex flex-row mt-10 gap-2 items-center">
          {active && !mode ? (
            <div className="flex flex-row">
              <img
                src={image}
                alt=""
                className="w-8 p-1 cursor-pointer bg-white/10 hover:bg-white/20"
                onClick={saved}
              />
              <input
                type="text"
                className="col-span-4 p-1 font-sans bg-neutral-700 active:outline-none focus:outline-none w-10"
                onChange={(e) => setAmount(e)}
              />
            </div>
          ) : (
            ""
          )}

          {mode ? (
            <>
              <div className="flex flex-row">
                <img
                  src={WoodWall}
                  alt=""
                  className="w-8 p-1 cursor-pointer bg-white/10 hover:bg-white/20"
                  onClick={saved}
                />
                <input
                  type="text"
                  className="col-span-4 p-1 font-sans bg-neutral-700 active:outline-none focus:outline-none w-10"
                />
              </div>
              <div className="flex flex-row">
                <img
                  src={StoneWall}
                  alt=""
                  className="w-8 p-1 cursor-pointer bg-white/10 hover:bg-white/20"
                  onClick={saved}
                />
                <input
                  type="text"
                  className="col-span-4 p-1 font-sans bg-neutral-700 active:outline-none focus:outline-none w-10"
                />
              </div>
              <div className="flex flex-row">
                <img
                  src={MetalWall}
                  alt=""
                  className="w-8 p-1 cursor-pointer bg-white/10 hover:bg-white/20"
                  onClick={saved}
                />
                <input
                  type="text"
                  className="col-span-4 p-1 font-sans bg-neutral-700 active:outline-none focus:outline-none w-10"
                />
              </div>
            </>
          ) : (
            ""
          )}

          {active ? (
            <div>
              <button
                className="bg-zinc-700 p-1 rounded font-Roboto"
                onClick={changeMode}
              >
                Change Mode
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
