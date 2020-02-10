import React, {useState} from "react";
import styles from './Styles'
import {navigate} from "@reach/router";
import Icon from "../../../../Components/Icon";

const ListItem = ({app}) => {
    const [hovered, setHover] = useState(false)
    const itemContainerStyle = hovered ?
        {...styles.itemContainer, ...styles.hovered}
        :
        styles.itemContainer

    return (
        <div style={itemContainerStyle}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             //TODO this navigation logic can be HOC'd
             onClick={() => navigate(`/app/${app.id}`)}
        >
            <Icon url={app.icon} />
            <div style={styles.appInfoContainer}>
                <div>{app.name}</div>
                <div style={styles.headline}>{app.headline}</div>
            </div>
        </div>
    )
}

export default ListItem

