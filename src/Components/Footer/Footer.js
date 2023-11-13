import React from "react";

import styles from './Footer.module.css'; 

import profileIcon from '../../Static/footerImages/profileIcon.png'
import plantItem from '../../Static/footerImages/plantItem.png'
import centerItem from '../../Static/footerImages/centerItem.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img style={{height: 40, marginTop: 15, marginLeft: 30}} src={centerItem} className={styles.selected} />
            <div className={styles.line} />
            <img style={{height: 40, marginTop: 15}} src={plantItem} />
            <div className={styles.line} />
            <img style={{height: 40, marginTop: 15, marginRight: 30}} src={profileIcon} />
        </div>
    )
}

export default Footer