import React from 'react';
import { gql } from 'apollo-boost'
import {useQuery} from "@apollo/react-hooks";
import AppCatalogue from "../AppCatalogue";
import {VariantContext} from "../../Contexts";
import Error from "../../Components/Error";
import {Router} from "@reach/router";
import AppDetail from "../AppDetail";
import Layout from "../../Layouts/DefaultLayout";
import Loading from "../../Components/Loading";

const GET_VARIANT = gql`
  {
    variant
  }
`

const App = () => {
  const {loading, error, data = {}} = useQuery(GET_VARIANT)
  const { variant } = data

  if(loading) return <Loading />

  if(error) return <Error />

  if(variant) {
    return (
        <VariantContext.Provider value={variant}>
          <Layout>
            <Router>
              <AppCatalogue path={'/'} />
              <AppDetail path={'app/:id'} />
            </Router>
          </Layout>
        </VariantContext.Provider>
    )
  }
  else {
    return null
  }
}

export default App;
