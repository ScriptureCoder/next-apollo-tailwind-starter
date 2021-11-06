import {HttpLink} from "apollo-link-http";
import {WebSocketLink} from "apollo-link-ws";
import {split} from "apollo-link";
import {getMainDefinition} from "apollo-utilities";
import {InMemoryCache} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

let Authorization = null;
const token = "store.getState().auth";
// const {token} = store.getState().auth;
if (token) {
    Authorization = `Bearer ${token}`;
}

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_BASE_URL,
    headers:{
        Authorization
    }
});

const wsLink = typeof window === 'undefined'?{}:new WebSocketLink({
    uri: process.env.NEXT_PUBLIC_WS_URL,
    options: {
        reconnect: true,
        connectionParams: {
            headers:{
                authorization:Authorization
            }
        },

    }
});

const link = typeof window === 'undefined'?{}:split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const cache = new InMemoryCache();
export const client = new ApolloClient({
    cache,
    link,
});


