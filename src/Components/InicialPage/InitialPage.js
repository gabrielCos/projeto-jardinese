import React from "react";

import classes from "./InitialPage.module.css"

import plantaInitial from "../../Static/PlantasInitialPage/PlantaInitial.png"
import shape from "../../Static/PlantasInitialPage/Vector.png"

const InitialPage = () => {
    return (
        <div>
            <img className={classes.shape} src={shape} alt="imagem de uma planta" />
            <img className={classes.initialPlant} src={plantaInitial} alt="imagem de uma planta" />
            <p className={classes.welcomeText}>
            Boas  vindas ao <br />
            <spam style={{color: '#2E7D48'}}>Jardine</spam>-se!
            </p>
            <p className={classes.text}>Descubra um novo mundo <br /> de natureza na sua casa!</p>
            <button style={{marginBottom: 10}} className={classes.initialButton}>Entrar</button> <br />
            <button className={classes.initialButton}>Registrar-se</button>
            <p className={classes.bottomText}>Iniciar sem conta</p>
        </div>
    )
}

export default InitialPage;