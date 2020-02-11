import React, {useContext} from "react";
import {VariantContext} from "../Contexts";
import merge from 'lodash.merge'

export const mergeStyles = (generalStyles, variantStyles) => {
    return merge(generalStyles,variantStyles)
}

const loadVariantStyle = (WrappedComponent, generalStyles={}, variantStyles = {}) => {
    return (props) => {
        const variant = useContext(VariantContext)
        const styles = mergeStyles(generalStyles, variantStyles[variant])

        return <WrappedComponent
            {...props}
            styles={styles}
        />
    }
}

export default loadVariantStyle