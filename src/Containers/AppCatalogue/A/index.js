import React from "react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import styles from "./Styles";
import ListItem from "./ListItem";
import Error from "../../../Components/Error";

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

    if(loading) return "Loading..."

    if(error) return <Error />

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