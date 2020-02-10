import React from 'react';
import { render } from 'react-dom';
import App from './Containers/App';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_SERVER_URL}`
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
