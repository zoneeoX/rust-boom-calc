import React, { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import { AiOutlineCaretDown } from "react-icons/ai";

import c4 from "../assets/picture/c4.png";
import explosive from "../assets/picture/explosive.png";
import rocket from "../assets/picture/rocket.png";
import satchel from "../assets/picture/satchel.png";
import sulfur from "../assets/picture/Sulfur.webp";
import Metal from "../assets/picture/Metal.webp";

const Craft = () => {
  const [isModal, setIsModal] = useState(false);
  const [selectedBoom, setSelectedBoom] = useState();
  const [currentInput, setCurrentInput] = useState();
  const [matArr, setMatArr] = useState([]);
  const [totals, setTotals] = useState([]);
  const [a, setA] = useState();

  const [inputList, setInputList] = useState([
    {
      id: 1,
      name: "Slot 1",
      image: "",
      currentItem: "",
      materials: "",
      amountItem: "",
    },
    {
      id: 2,
      name: "Slot 2",
      image: "",
      currentItem: "",
      materials: "",
      amountItem: "",
    },
    {
      id: 3,
      name: "Slot 3",
      image: "",
      currentItem: "",
      materials: "",
      amountItem: "",
    },
    {
      id: 4,
      name: "Slot 4",
      image: "",
      currentItem: "",
      materials: "",
      amountItem: "",
    },
  ]);

  const [items, setItems] = useState([
    {
      name: "C4",
      picture: c4,
      material: {
        "metal fragments": 200,
        "tech trash": 2,
        sulfur: 2200,
        cloth: 20,
        "animal fat": 45,
        charcoal: 3000,
      },
    },
    {
      name: "Explosive Ammo",
      picture: explosive,
      material: {
        "metal fragments": 10,
        sulfur: 50,
        charcoal: 60,
      },
    },
    {
      name: "Rocket",
      picture: rocket,
      material: {
        "metal fragments": 100,
        "metal pipe": 2,
        sulfur: 1400,
        charcoal: 1950,
        cloth: 8,
        "animal fat": 24,
      },
    },
    {
      name: "Satchel",
      picture: satchel,
      material: {
        "metal fragments": 80,
        rope: 1,
        sulfur: 480,
        charcoal: 720,
        cloth: 10,
      },
    },
  ]);

  // let sum = inputList.reduce(function(prev, current) {
  //   return prev + + (current.currentItem?.material?.charcoal);
  //   // log(current.currentItem.material?.charcoal * current?.amountItem)
  // }, 0);

  // log(sum);

  //object loop and

  useEffect(() => {
    // setA(Object.entries(totals));
    // var totaling = inputList.reduce((total, item, index) => {
    //   return (
    //     //object key
    //     //access object key
    //     //compare between objects
    //     //if same add
    //     //if not 0
    //     //https://stackoverflow.com/questions/75381808/sum-multiple-keys-and-merge-to-one-object-based-off-a-specific-key
    //     // https://stackoverflow.com/questions/52882345/javascript-sum-object-values-if-the-objects-other-values-are-the-same?rq=3
    //     //https://stackoverflow.com/questions/75381808/sum-multiple-keys-and-merge-to-one-object-based-off-a-specific-key
    //     total + (item?.materials["charcoal"] ? item?.materials["charcoal"] : 0)
    //   );
    // }, 0);
    //https://stackoverflow.com/questions/39856883/sum-values-in-object-if-multiple-keys-are-the-same-js?rq=3

    const result = Object.values(
      inputList.reduce((a, { materials, currentItem }) => {
        a ? (a ??= { currentItem }) : "";
        Object.entries(materials).forEach(([key, value]) => {
          setTotals(a);
          a ? (a[key] ??= 0) : "";
          a ? (a[key] += value) : "";
        });
        return a;
      }, {})
    );

    // const inpMat = inputList.materials ? inputList.materials : "";

    // var totaling = inputList.reduce((prev, curr) => {
    //   // var arrayKeys = Object.keys(curr.materials);
    //   //iterate materials
    //   //kalo dari salah satu material
    //   let objs = Object.keys(curr.materials);
    //   objs.map((item, index) => (
    //     console.log(curr.materials[item])
    //   ))
    // }, 0);

    // const result = Object.values(
    //   (inputList.materials ? inputList.materials : inputList).reduce((a, { name, ...values }) => {
    //     a[name] ??= { name };
    //     Object.entries(values).forEach(([key, value]) => {
    //       a[name][key] ??= 0;
    //       a[name][key] += value;
    //     });
    //     return a;
    //   }, {})
    // );

    // console.log(result);
  }, [inputList]);

  const [boomAmount, setBoomAmount] = useState(Number);

  function openModal(e) {
    const dataValue = e.target.getAttribute("data-value");
    const currentObject = inputList.find((x) => x.id == dataValue);

    setCurrentInput(currentObject);

    setIsModal((prevState) => !prevState);
  }

  // Add up if key is === key else dont

  return (
    <>
      {isModal ? (
        <Modal
          setIsModal={setIsModal}
          setSelectedBoom={setSelectedBoom}
          setBoomAmount={setBoomAmount}
          items={items}
          setItems={setItems}
          setInputList={setInputList}
          currentInput={currentInput}
          inputList={inputList}
          boomAmount={boomAmount}
          selectedBoom={selectedBoom}
          setMatArr={setMatArr}
        />
      ) : (
        ""
      )}
      <div className="bg-[#1B1B1B] min-w-[40vw] max-w-full min-h-[20vh] p-10 font-Bebas">
        <div className="flex flex-row justify-between">
          <div className="">
            <h1 className="text-2xl tracking-wider cursor-default select-none text-white/50">
              Select Items
            </h1>
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex flex-row gap-3">
                {inputList
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((item, index) => (
                    <div
                      id={index}
                      className="w-24 h-24 bg-[#2F3228]/50 hover:bg-[#2F3228] cursor-pointer flex flex-col justify-center items-center"
                      data-value={item?.id}
                      onClick={(e) => openModal(e)}
                    >
                      <div className="z-10">
                        <img src={item?.image} className="w-16" />
                        <h1 className="text-sm opacity-50">
                          {item?.amountItem === ""
                            ? ""
                            : item?.amountItem + "x"}
                        </h1>
                      </div>
                    </div>
                  ))}
              </div>
              {/* {currentInput.map((item, idx) =>
                keyName === "sulfur" ? <h1>{totals["sulfur"]}</h1> : ""
              )} */}

              {/* {inputList.map((item, index) => (
                <h1>
                  {item.currentItem}:{" "}
                  {item.amountItem /
                    (item.currentItem === "Rocket"
                      ? 4
                      : item.currentItem === "C4"
                      ? 2
                      : "")}{" "}
                  Walls
                </h1>
              ))} */}
            </div>
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

          <div>
            {/* <div className="flex flex-col">
              {a?.map((item, index) =>
                item.map((itm, idx) => <h1 className="opacity-50">{itm}</h1>)
              )}
            </div> */}

            <div>
              {totals ? (
                <h1 className="text-2xl tracking-wider cursor-default select-none text-white/50 w-fit">
                  Total Materials
                </h1>
              ) : (
                ""
              )}
              {Object.keys(totals).map((keyName, i) => (
                <div className="flex flex-row gap-2 items-center font-Roboto">
                  <p className="text-green-600 text-xl font-Roboto capitalize">
                    {keyName}{" "}
                  </p>
                  <span className="opacity-30 text-white text-xl">
                    {totals[keyName]}
                  </span>
                </div>
              ))}
            </div>

            <div>
              {Object.keys(totals).map((keyName, i) =>
                keyName === "sulfur" && "metal fragments" ? (
                  <div className="flex flex-col font-Roboto mt-10">
                    <h1 className="text-2xl tracking-wider cursor-default select-none text-white/50 font-Bebas">
                      Total Nodes
                    </h1>
                    <p className="text-green-400 text-xl flex flex-row gap-2 items-center">
                      Sulfur Nodes
                      <p className="text-white opacity-40">
                        {(totals["sulfur"] / 300).toFixed(0)}
                      </p>
                    </p>

                    <p className="text-green-400 text-xl flex flex-row gap-2 items-center">
                      Metal Nodes
                      <p className="text-white opacity-40">
                        {(totals["metal fragments"] / 600).toFixed(0)}
                      </p>
                    </p>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex mt-20 text-2xl text-white/50 flex-col">
          {/* <h1>Required Materials</h1>
         {inputList.map((item, idx) => (
      Object.keys(item.currentItem.material ? item.currentItem.material : "").map((obj, i) => (
        <div className="flex flex-row">
          <h1 className="flex flex-row w-40 text-green-600 text-md">{Object.keys(item.currentItem?.material)[i]}</h1>
          <p className="text-md opacity-50">{item.currentItem.material[obj]}</p>
        </div>
      ))
         ))} */}
          <div className="flex flex-row rounded-lg">
            {inputList.map((item, idx) =>
              item.currentItem ? (
                <div className="w-fit h-fit mr-10">
                  <div key={idx} className="w-fit h-fit">
                    <div className="flex flex-col gap-0">
                      <h1 className="flex flex-row gap-2">
                        {item?.materials ? item.name : ""}
                        <p className="text-red-800">
                          {item?.materials ? "(" + item.currentItem + ")" : ""}
                        </p>
                      </h1>
                      <div className="font-Roboto my-2 text-xl bg-zinc-800 p-2 w-60 rounded">
                        <h1 className="text-green-500 rounded flex items-center flex-row gap-1">
                          <span className="w-40">Stone Wall </span>
                          <span className="text-white/30">
                            {item.stone_wall.toFixed(1)}
                          </span>
                        </h1>
                        <h1 className="text-green-500 rounded flex items-center flex-row gap-1">
                          <span className="w-40">Metal Wall </span>
                          <span className="text-white/30">
                            {item.metal_wall.toFixed(1)}
                          </span>
                        </h1>
                        <h1 className="text-green-500 rounded flex items-center flex-row gap-1">
                          <span className="w-40">Armored Wall </span>
                          <span className="text-white/30">
                            {" "}
                            {item.high_wall.toFixed(1)}
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div></div>

                  <div className="bg-zinc-800 p-2 rounded h-fit">
                    {Object.keys(item?.materials ? item?.materials : "").map(
                      (obj, i) => (
                        <div className="flex flex-row font-Roboto capitalize">
                          <p className="flex flex-row w-40 text-green-600 text-xl whitespace-nowrap">
                            {Object.keys(item?.materials)[i]}
                          </p>
                          <p className="text-md opacity-50 text-xl">
                            {item.materials[obj]}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Craft;
