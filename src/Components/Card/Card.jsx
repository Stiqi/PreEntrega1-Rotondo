import ButtonCounter from "../ButtonCounter/ItemCounter";
import style from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={style.card}>
      <img src={item.source} alt={item.alt} className={style["card-img"]} />
      <p className={style.name}>{item.name}</p>
      <p className={style.price}>${item.precio}</p>
      <ButtonCounter />
    </div>
  );
};

export default Card;
