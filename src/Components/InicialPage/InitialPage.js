import React from "react";
import { Link } from "react-router-dom";

import classes from "./InitialPage.module.css"

import plantaInitial from "../../Static/PlantasInitialPage/PlantaInitial.png"
import shape from "../../Static/PlantasInitialPage/Vector.png"

const InitialPage = () => {
    return (
        <div className={classes.initialPage}> 
            <img className={classes.shape} src={shape} alt="imagem de uma planta" />
            <img className={classes.initialPlant} src={plantaInitial} alt="imagem de uma planta" />
            <p className={classes.welcomeText}>
            Boas  vindas ao <br />
            <spam style={{color: '#2E7D48'}}>Jardine</spam>-se!
            </p>
            <p className={classes.text}>Descubra um novo mundo <br /> de natureza na sua casa!</p>
           <Link to="/login"> <button style={{marginBottom: 10}} className={classes.initialButton}>Entrar</button> <br /> </Link>
           <Link to="/register"><button className={classes.initialButton}>Registrar-se</button> </Link> 
            <Link to="/gardenCenter" className={classes.link}><p className={classes.bottomText}>Iniciar sem conta</p> </Link>
        </div>
    )
}

export default InitialPage;