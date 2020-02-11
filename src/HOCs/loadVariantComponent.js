import React, {useContext} from "react";
import {VariantContext} from "../Contexts";

const loadVariantComponent = (variantComponents) => {
    return () => {
        const variant = useContext(VariantContext)
        return variantComponents[variant]
    }
}

export default loadVariantComponent