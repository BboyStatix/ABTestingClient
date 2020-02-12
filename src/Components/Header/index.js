import React, {useContext} from "react";
import styles from "./Styles";
import {VariantContext} from "../../Contexts";

const Header = () => {
    const variant = useContext(VariantContext)
    return (
        <div style={styles.header}>
            <div>
                App Store
            </div>
            <div>{`Variant  ${variant}`}</div>
        </div>
    )
}

export default Header;
