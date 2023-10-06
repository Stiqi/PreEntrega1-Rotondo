import { useEffect, useState } from "react";
import style from "./item-list-container.module.css";
import ButtonCounter from "../ButtonCounter/ItemCounter";
import Card from "../Card/Card";
import { Spin } from "antd";

const catalogo = [
  {
    name: "Chimuelo",
    precio: 2000,
    id: 1,
    source: "src/Assets/mockimg/dragon.jpg",
  },
  {
    name: "Groot Maceta",
    precio: 1500,
    id: 2,
    source: "src/Assets/mockimg/groot.jpg",
  },
  {
    name: "Mano Merlina",
    precio: 1200,
    id: 3,
    source: "src/Assets/mockimg/hand.jpg",
  },
  {
    name: "Llavero Defensa",
    precio: 2500,
    id: 4,
    source: "src/Assets/mockimg/manopla.jpg",
  },
];

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const itemPromise = new Promise((response, reject) => {
    setTimeout(() => {
      catalogo.length > 0
        ? response(catalogo)
        : reject(new Error("No se encontraron items"));
    }, 2000);
  });

  useEffect(() => {
    itemPromise
      .then((items) => setItems(items))
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  return (
    <div className={style.store}>
      <h1 className={style.greeting}>{greeting}</h1>
      {items.length > 0 ? (
        <div className={style["item-list"]}>
          {items.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default ItemListContainer;
