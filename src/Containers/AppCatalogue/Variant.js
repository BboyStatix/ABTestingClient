import React, {useContext} from "react";
import {VariantContext} from "../../Contexts";
import A from "./A";
import B from "./B";

const Variant = () => {
    const variant = useContext(VariantContext)

    switch(variant) {
        case 'A':
            return <A />
        case 'B':
            return <B />
    }
}

export default Variant