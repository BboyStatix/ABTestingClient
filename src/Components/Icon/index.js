import React from "react";
import styles from "./Styles";

const Icon = ({url}) => {
    return (
        <img style={styles.image} src={url} alt=""/>
    )
}

export default Icon;
