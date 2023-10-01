import React, { useState } from "react";

function ToDoList() {
  const [title, setTitle] = useState("");
  const [myList, setMyList] = useState([
    "сходить в магазин",
    "покушать",
    "фитнес",
    "бассейн",
    "в универ",
  ]);
  const [inputClient, setInputClient] = useState("");
  const [myClientList, setMyClientList] = useState([
    "baha",
    "anar",
    "vlad",
    "andrei",
  ]);

  const [inputGood, setInputGood] = useState("");
  const [listGoods, setListGoods] = useState([
    {
      name: "Iphone 15",
      id: 1,
    },
    {
      name: "Iphone 14",
      id: 2,
    },
    {
      name: "Iphone 13",
      id: 3,
    },
  ]);

  const [inputEdit, setInputEdit] = useState({ name: "", id: null });

  return (
    <div>
      <input
        placeholder="Add my list"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setMyList([...myList, title]);
        }}
      >
        Add
      </button>
      <ul>
        {myList.map((el, i) => {
          return (
            <li>
              1 - {el} - {i}
              <button
                onClick={() => {
                  setMyList([...myList.filter((list) => list !== el)]);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
        {/* <li> </li>
        <li> </li>
        <li> </li> */}
      </ul>
      <h2>Список клиентов</h2>
      <input
        type="text"
        value={inputClient}
        onChange={(e) => setInputClient(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setMyClientList([...myClientList, inputClient]);
        }}
      >
        Add Client
      </button>
      <ul>
        {myClientList.map((client, i) => {
          return (
            <div style={{ display: "flex" }}>
              <li>
                клиентов нашей компаний: {client} {i + 1}
              </li>
              <button
                onClick={() => {
                  setMyClientList([
                    ...myClientList.filter((cli) => cli !== client),
                  ]);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
      <h2>Список товаров</h2>
      <div>
        <input
          placeholder="Add goods"
          value={inputGood}
          onChange={(good) => {
            setInputGood(good.target.value);
          }}
        />
        <button
          onClick={() => {
            setListGoods([
              ...listGoods,
              { name: inputGood, id: listGoods.length + 1 },
            ]);
          }}
        >
          Add Good
        </button>

        <ul>
          {listGoods.map((product) => {
            return (
              <div style={{ display: "flex" }}>
                <li>{product.name}</li>
                <button
                  onClick={() => {
                    setListGoods([
                      ...listGoods.filter((pro) => pro.id !== product.id),
                    ]);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    setInputEdit({ name: product.name, id: product.id })
                  }
                >
                  Edit
                </button>
              </div>
            );
          })}
        </ul>
        <input
          placeholder="Edit goods"
          value={inputEdit.name}
          onChange={(e) => {
            setInputEdit(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setListGoods([
              ...listGoods,
              { name: inputGood, id: listGoods.length + 1 },
            ]);
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
