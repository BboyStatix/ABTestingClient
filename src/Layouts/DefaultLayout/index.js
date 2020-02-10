import React from "react";
import Header from "../../Components/Header";
import './index.css'

const DefaultLayout = ({children}) => {
    return (
        <div className='app'>
            <Header />
            {children}
        </div>
    )
}

export default DefaultLayout