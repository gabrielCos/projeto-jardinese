import React, {useState} from "react";
import { Link } from "react-router-dom"

import styles from './CatalogItem.module.css'

import itemIcon from '../../Static/ItemIcon.png'

import {HeartFilled} from '@ant-design/icons'

const CatalogItem = (props) => {

    const [isfavorite, setIsFavorite] = useState("white")

    const favoriteHandler = () => {
        if (isfavorite === "white") {
            setIsFavorite("red")
        } else {
            setIsFavorite("white")
        }
    }

    return (
        <li>
            <Link to="/gardenItem" className={styles.linkUnderline}><div className={styles.item}>
                <HeartFilled onClick={favoriteHandler}  style={{position: "absolute", color: isfavorite}} />
                <img src={itemIcon} className={styles.plant}/>
                <div>
                    <h1 className={styles.itemName}>{props.name}</h1>
                    <p className={styles.itemStore}>{props.store}</p>
                    <div>
                        <button className={styles.itemButton}>Adicionar ao carrinho</button>
                    </div>
                </div>
                <p className={styles.itemPrice}> <span style={{fontSize: 10, position: "relative", bottom: 5}}>R$</span>{props.price}</p> 
            </div></Link>
        </li>
    )
}

export default CatalogItem