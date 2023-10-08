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
      quantityClient: 28,
      profit: 128987912,
      guestsQuantity: 134,
      wasted: [
        { id: 1, name: "water", price: 1600 },
        { id: 2, name: "phoneBill", price: 3500 },
      ],
    },
    {
      name: "Iphone 14",
      id: 2,
      quantityClient: 158,
      profit: 81215887999,
      guestsQuantity: 258,
      wasted: [
        { id: 1, name: "water", price: 1600 },
        { id: 2, name: "phoneBill", price: 3500 },
        { id: 3, name: "outOfEat", price: 6700 },
      ],
    },
    {
      name: "Iphone 13",
      id: 9,
      quantityClient: 253,
      profit: 121598745699,
      guestsQuantity: 458,
      wasted: [
        { id: 1, name: "water", price: 1600 },
        { id: 2, name: "phoneBill", price: 3500 },
        { id: 3, name: "outOfEat", price: 6700 },
        { id: 4, name: "o", price: 6700 },
      ],
    },
  ]);

  const [listGoods1, setListGoods1] = useState([
    {
      name: "Iphone 15",
      id: 1,
      quantityClient: 289,
    },
    {
      name: "Iphone 14",
      id: 2,
      quantityClient: 1585,
    },
    {
      name: "Iphone 13",
      id: 3,
      quantityClient: 2513,
    },
  ]);

  const [listGoods2, setListGoods2] = useState([
    {
      name: "Iphone 15",
      id: 1,
      quantityClient: 2893,
    },
    {
      name: "Iphone 14",
      id: 2,
      quantityClient: 15887,
    },
    {
      name: "Iphone 13",
      id: 3,
      quantityClient: 2533,
    },
  ]);

  const sumAllClient = (arrayOfClient) => {
    let allClientQuantitySum = 0;
    arrayOfClient.forEach((el) => {
      allClientQuantitySum = allClientQuantitySum + el.quantityClient;
    });
    return allClientQuantitySum;
  };

  const sumAllProfit = (arraOFProfit) => {
    let allSumProfit = 0;
    arraOFProfit.forEach((el) => {
      allSumProfit = allSumProfit + el.profit;
    });
    return allSumProfit;
  };

  const sumAllPeople = (arrayOfPeople) => {
    let allPeople = 0;
    arrayOfPeople.forEach((el) => {
      allPeople = allPeople + el.quantityClient + el.guestsQuantity;
    });
    return allPeople;
  };

  const insideForAllPeople = (arrayOfPeople) =>
    arrayOfPeople.reduce(
      (prevSum, el) => prevSum + (el.quantityClient + el.guestsQuantity),
      200
    );

  const sumAllId = (arrayOfId) =>
    arrayOfId.reduce((prevId, el) => prevId + el.id, 0);

  const sumAllWastedField = (wastprice) => {
    return wastprice.map((el) => {
      return {
        ...el,
        wastedSum: el.wasted.reduce((prev, element) => {
          return prev + element.price;
        }, 0),
      };
    });
  };

  const allWastedPrice = (allWastPrice) => {
    return allWastPrice.reduce((prev, element) => {
      return prev + element.wastedSum;
    }, 0);
  };

  allWastedPrice(sumAllWastedField(listGoods));

  const [inputEdit, setInputEdit] = useState({ name: "", id: null });
  const [inputFirm, setInputFirm] = useState("");
  const [listFirm, setListFirm] = useState(["BI", "Tumar", "GSB"]);

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

              {
                name: inputGood,
                id: listGoods.length + 1,
                quantityClient: 5,
                profit: 10000,
                guestsQuantity: 10,
                wasted: [
                  { id: 1, name: "water", price: 1600 },
                  { id: 2, name: "phoneBill", price: 3500 },
                ],
              },
            ]);
          }}
        >
          Add Good
        </button>

        <ul>
          {listGoods
            .sort((a, b) => a.id - b.id)
            .map((product) => {
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
        <div>
          <h3>Общий количество клиентов: {sumAllClient(listGoods)}</h3>
          <h3>Общий доход от продажи: {sumAllProfit(listGoods)}</h3>
          <h3>Общая количество гостей и клиентов: {sumAllPeople(listGoods)}</h3>
          <h3>
            Общая количество гостей и клиентов: {insideForAllPeople(listGoods)}
          </h3>
          <h3>Общая количество ID: {sumAllId(listGoods)}</h3>
          <h3>
            Общая сумма всех wasted:
            {allWastedPrice(sumAllWastedField(listGoods))}
          </h3>
        </div>
        <input
          placeholder="Edit goods"
          value={inputEdit.name}
          onChange={(e) => {
            setInputEdit({ ...inputEdit, name: e.target.value });
          }}
        />
        <button
          onClick={() => {
            setListGoods([
              ...listGoods.filter((el) => {
                if (el.id !== inputEdit.id) {
                  return el;
                }
              }),
              inputEdit,
            ]);
          }}
        >
          Save Changes
        </button>
      </div>
      <div>
        <h2>Список не добросовестных компаний!</h2>
        <input
          placeholder="Add firm"
          value={inputFirm}
          onChange={(firm) => {
            setInputFirm(firm.target.value);
          }}
        />
        <button
          onClick={() => {
            setListFirm([...listFirm, inputFirm]);
          }}
        >
          Add firm
        </button>
        <ul>
          {listFirm.map((firma) => {
            return (
              <div style={{ display: "flex" }}>
                <li>{firma}</li>
                <button>Edit</button>
                <button
                  onClick={() => {
                    setListFirm([...listFirm.filter((e) => e !== firma)]);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
