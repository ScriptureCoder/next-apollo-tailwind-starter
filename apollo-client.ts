import {HttpLink} from "apollo-link-http";
import {WebSocketLink} from "apollo-link-ws";
import {ApolloLink, split} from "apollo-link";
import {getMainDefinition} from "apollo-utilities";
import {InMemoryCache} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import {browser} from "./utils/constants";

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

let link: ApolloLink = httpLink;
if (browser){
    const wsLink = new WebSocketLink({
        uri: process.env.NEXT_PUBLIC_WS_URL||"",
        options: {
            reconnect: true,
            connectionParams: {
                headers:{
                    authorization:Authorization
                }
            },

        }
    });

    link = split(
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
}


export const cache = new InMemoryCache();
export const client = new ApolloClient({
    cache,
    link,
});


