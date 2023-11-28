import { React, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ExpandedItem.module.css";

import itemIcon from "../../Static/ItemIcon.png";
import solParcial from "../../Static/Especs/sol-parcial.png";
import regaEscassa from "../../Static/Especs/rega-escassa.png";
import potePequeno from "../../Static/Especs/rega-escassa.png";

import { HeartFilled } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ExpandedItem = (props) => {
  const [isfavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    if (isfavorite === false) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  return (
    <div className={styles.itemExpanded}>
      <img src={itemIcon} className={styles.principalImg} />
      <Link to="/gardenCenter">
        <ArrowLeftOutlined
            style={{
            position: "absolute",
            color: "white",
            fontSize: 20,
            backgroundColor: "#5DB075",
            borderRadius: 30,
            padding: 10,
            height: 20,
            top: 70,
            left: -15,
            }}
        />
      </Link>
      <div className={styles.title}>
        <p className={styles.name}>{props.item[0].name}</p>
        {isfavorite ? (
          <HeartFilled
            onClick={favoriteHandler}
            style={{
              position: "absolute",
              right: 0,
              fontSize: 30,
              color: "red",
            }}
          />
        ) : (
          <HeartOutlined
            onClick={favoriteHandler}
            style={{ position: "absolute", right: 0, fontSize: 30 }}
          />
        )}
      </div>
      <div className={styles.price}>
        <p className={styles.value}>
          <span>R$</span>
          {props.item[0].price}
        </p>
        <p className={styles.conditions}>Em até 10x R$ 10,09 sem juros</p>
        <p className={styles.parcelas}>Ver parcelas disponíveis</p>
      </div>
      <div className={styles.espec}>
        <div>
          <img src={solParcial} />
          <span style={{ left: 65 }}>?</span>
          <img src={regaEscassa} />
          <span style={{ left: 163 }}>?</span>
          <img src={potePequeno} />
          <span style={{ left: 262 }}>?</span>
        </div>
      </div>
      <div className={styles.description}>
        <h1>Orquídea Phalaenopsis: Elegância em Miniatura</h1>
        <p>
          A Phalaenopsis, uma orquídea de rara beleza, é a personificação da
          sofisticação natural. Suas flores exuberantes e cores deslumbrantes
          acrescentam um toque de distinção a qualquer espaço. Uma obra-prima
          botânica em miniatura, perfeita para elevar o requinte de sua casa.
          Adquira a sua hoje e transforme seu ambiente com um toque de luxo
          natural.
        </p>
      </div>
      <button className={styles.button}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ExpandedItem;
