import React from "react";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";

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
    const [apps] = useQuery(GET_APPS)

    return (
        <div>B</div>
    )
}

export default B