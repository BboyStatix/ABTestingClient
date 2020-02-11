import React from 'react';
import styles from "./Styles";
import Icon from "../../Components/Icon";
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import InstallButton from "./InstallButton";

const GET_APP = gql`
  query app($id: ID!) {
    app(id: $id) {
      icon
      name
      headline
      description
      installed
    }
  }
`

const AppDetail = ({id}) => {
  const {loading, error, data = {}} =
      useQuery(GET_APP, {variables: {id}})
  const { app } = data

  if(loading) return <Loading />

  if(error) return <Error />

  if(app) {
    const {headline, icon, description, name, installed} = app
    return (
        <div style={styles.container}>
            <div style={styles.iconContainer}>
                <Icon url={icon}/>
            </div>
            <div style={styles.appDescriptionContainer}>
                <div style={styles.appName}>{name}</div>
                <div style={styles.appHeadline}>{headline}</div>
                <div style={styles.appDescription}>{description}</div>
            </div>
            <InstallButton installed={installed}/>
        </div>
    )
  } else {
    return null
  }
}

export default AppDetail;
