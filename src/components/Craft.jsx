import React, { useEffect, useState } from "react";
import Modal from "./Modal.jsx";

import c4 from "../assets/picture/c4.png";
import explosive from "../assets/picture/explosive.png";
import rocket from "../assets/picture/rocket.png";
import satchel from "../assets/picture/satchel.png";

const Craft = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedBoom, setSelectedBoom] = useState();
  const [currentInput, setCurrentInput] = useState();
  const [inputList, setInputList] = useState([
    {
      id: 1,
      name: "item 1",
      image: "",
      currentItem: "",
      amountItem: "",
    },
    {
      id: 2,
      name: "item 2",
      image: "",
      currentItem: "",
      amountItem: "",
    },
    {
      id: 3,
      name: "item 3",
      image: "",
      currentItem: "",
      amountItem: "",
    },
    {
      id: 4,
      name: "item 4",
      image: "",
      currentItem: "",
      amountItem: "",
    },
  ]);
  console.log(inputList)

  const [items, setItems] = useState([
    {
      name: "C4",
      picture: c4,
      material:
        {
          "metal fragments": 200,
          "Tech trash": 2,
          "sulfur": 2200,
          "cloth": 20,
          "Animal fat": 45,
          "charcoal": 3000,
        },
    
    },
    {
      name: "Explosive Ammo",
      picture: explosive,
      material: 
        {
          "metal fragments": 10,
          "sulfur": 50,
          "charcoal": 60,
        },
     
    },
    {
      name: "Rocket",
      picture: rocket,
      material: 
        {
         "metal fragmnets": 100,
          "metal pipe": 2,
          "sulfur": 1400,
          "charcoal": 1950,
          "cloth": 8,
          "animal fat": 24,
        },
     
    },
    {
      name: "Satchel",
      picture: satchel,
      material: 
        {
          "metal fragments": 80,
          "rope": 1,
          "sulfur": 480,
          "charcoal": 720,
          "cloth": 10,
        },
    
    },
  ])

  const [boomAmount, setBoomAmount] = useState(Number);


  function openModal(e) {
    const dataValue = e.target.getAttribute("data-value");
    const currentObject = inputList.find((x) => x.id == dataValue);
    setCurrentInput(currentObject);

    setIsModal((prevState) => !prevState);
  }



  


  return (
    <>
      {isModal ? (
        <Modal setIsModal={setIsModal} setSelectedBoom={setSelectedBoom} setBoomAmount={setBoomAmount} items={items} setItems={setItems} setInputList={setInputList} currentInput={currentInput} inputList={inputList} boomAmount={boomAmount} selectedBoom={selectedBoom} />
      ) : (
        ""
      )}
      <div className="bg-[#1B1B1B] w-[40vw] min-h-[20vh] p-10 font-Bebas">
        <div>
          <h1 className="text-2xl tracking-wider cursor-default select-none text-white/50">
            Raid Calculator
          </h1>
          <div className="flex flex-row gap-3 mt-10">

            {inputList.sort((a, b) => (a.id > b.id) ? 1 : -1).map((item, index) => (
               <div
               id={index}
                 className="w-24 h-24 bg-[#2F3228]/50 hover:bg-[#2F3228] cursor-pointer flex flex-col justify-center items-center"
                 data-value={item?.id}
                 onClick={(e) => openModal(e)}
               >
                <div className="z-10">

                 <img src={item?.image} className="w-16" />
                 <h1 className="text-sm opacity-50">{item?.amountItem === "" ?  "" : item?.amountItem + 'x'}</h1>
                  </div>
 
               </div>
            ))}
            {/* {inputList.map((item, index) => (
              <div
              id={index}
                className="w-24 h-24 bg-[#2F3228]/50 hover:bg-[#2F3228] cursor-pointer"
                data-value={item?.id}
                onClick={(e) => openModal(e)}
              >
                <img src={item?.image} />

              </div>
            ))} */}
          </div>
        </div>

        <div className="flex mt-20 text-2xl text-white/50 flex-col">
          <h1>Required Materials</h1>
         {inputList.map((item, idx) => (
      Object.keys(item.currentItem.material ? item.currentItem.material : "").map((obj, i) => (
        console.log(Object.keys(item.currentItem?.material)[i]),
        <div className="flex flex-row">
          <h1 className="flex flex-row w-40 text-green-600 text-md">{Object.keys(item.currentItem?.material)[i]}</h1>
          <p className="text-md opacity-50">{item.currentItem.material[obj] * item.amountItem}</p>
        </div>
      ))
         ))}
        </div>
      </div>
    </>
  );
};

export default Craft;
