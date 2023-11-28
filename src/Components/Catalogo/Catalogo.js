import React from "react";

import Footer from "../Footer/Footer";
import CatalogItem from "../CatalogItem/CatalogItem";

import styles from './Catalogo.module.css'

import centerItem from '../../Static/footerImages/centerItem.png'

import {ArrowLeftOutlined} from '@ant-design/icons'
import {SearchOutlined} from '@ant-design/icons'

const Catalogo = (props) => {


    return (
        <div className={styles.catalogo}>
            <div className={styles.catalogheader} >
                <ArrowLeftOutlined style={{color: "white", fontSize:20, backgroundColor: "#5DB075", borderRadius: 30, padding: 10, height:20, marginTop: 15}} />
                <h1 className={styles.title} >Garden Center</h1>
                <img style={{height: 40, marginLeft: 0, marginTop: 8}} src={centerItem} />
            </div>
            <div className={styles.searchBar}>
                <SearchOutlined style={{marginTop: 10}}/>
                <input type="text" name="search" placeholder="procure por plantas, itens etc" className={styles.inputSearchBar} />
            </div>
            <div className={styles.line} />
            <ul className={styles.plantlist}>
                {props.plants.map((plant) => (
                    <CatalogItem 
                        key = {plant.id}
                        name = {plant.name}
                        price = {plant.price}
                        store = {plant.store}
                    />
                ))}
            </ul>
            <Footer />
        </div>
    )
}

export default Catalogo;