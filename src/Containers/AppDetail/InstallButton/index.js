import React from 'react';
import withVariantStyle from "../../../HOCs/withVariantStyle";
import generalStyles from './Styles'
import stylesA from './A/Styles'
import stylesB from './B/Styles'

const InstallButton = ({installed, styles}) => {
    return (
        <button style={styles.installButton}>
            {installed ? 'Open' : 'Install'}
        </button>
    )
}

const WrappedComponent = withVariantStyle(
    InstallButton,
    generalStyles,
    {A: stylesA, B: stylesB}
)

export default WrappedComponent
