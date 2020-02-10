import React from "react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import styles from "./Styles";
import GridItem from "./GridItem";
import Error from "../../../Components/Error";
import Loading from "../../../Components/Loading";

const GET_APPS = gql`
    {
        apps {
            id
            icon
            name
        }    
    }
`

const B = () => {
    const {loading, error, data = {}} = useQuery(GET_APPS)
    const { apps } = data

    if(loading) return <Loading />

    if(error) return <Error />

    if(apps) {
        return (
            <div style={styles.container}>
                {apps.map((app, index) => {
                    return <GridItem key={index} app={app} />
                })}
            </div>
        )
    }
    else {
        return null
    }
}

export default B