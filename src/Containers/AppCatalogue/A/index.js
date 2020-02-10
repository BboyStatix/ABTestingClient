import React from "react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {Link} from "@reach/router";
import styles from "./Styles";
import ListItem from "./ListItem";

const GET_APPS = gql`
    {
        apps {
            id
            icon
            name
            headline
        }
    }
`

const A = () => {
    const {loading, error, data = {}} = useQuery(GET_APPS)
    const { apps } = data

    if(apps) {
        return (
            <div style={styles.container}>
                {apps.map((app, index) => {
                  return <ListItem key={index} app={app} />
                })}
            </div>
        )
    }
    else {
        return null
    }
}

export default A