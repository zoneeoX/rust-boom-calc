import React, { useState } from "react";
import Modal from "./Modal.jsx";

const Craft = () => {
  const [isModal, setIsModal] = useState(false);
  const [inputList, setInputList] = useState([
    {
      id: 1,
      name: "itemone",
      currentItem: "",
      amountItem: "",
    },
    {
      id: 2,
      name: "itemtwo",
      currentItem: "",
      amountItem: "",
    },
    {
      id: 3,
      name: "itemthree",
      currentItem: "",
      amountItem: "",
    },
    {
      id: 4,
      name: "itemfour",
      currentItem: "",
      amountItem: "",
    },
  ]);

  function openModal(e) {
    const dataValue = e.target.getAttribute("data-value");
    const currentObject = inputList.find((x) => x.id == dataValue);

    setIsModal((prevState) => !prevState);
  }

  return (
    <>
      {isModal ? <Modal setIsModal={setIsModal} /> : ""}
      <div className="bg-[#1B1B1B] w-[40vw] min-h-[20vh] p-10 font-Bebas">
        <div>
          <h1 className="text-2xl tracking-wider cursor-default select-none text-white/50">
            Raid Calculator
          </h1>
          <div className="flex flex-row gap-3 mt-10">
            {inputList.map((item, index) => (
              <div
                className="w-24 h-24 bg-[#2F3228]/50 hover:bg-[#2F3228] cursor-pointer"
                data-value={item.id}
                onClick={(e) => openModal(e)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center mt-20 text-2xl text-white/50">
          <h1>Required Materials</h1>
        </div>
      </div>
    </>
  );
};

export default Craft;
