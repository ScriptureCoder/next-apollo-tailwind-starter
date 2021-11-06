import '../styles/variables.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import {cache,client} from "../apollo-client";
import AlphaStorage from "../utils/alpha-storage";
import {persistCache} from "apollo-cache-persist";
import {useEffect, useState} from "react";
import {ApolloProvider} from "@apollo/react-common";

function MyApp({ Component, pageProps }: AppProps) {
    const [iClient, setClient] = useState<any>(undefined);

    useEffect(() => {
        const initData = {};
        cache.writeData({ data: initData });
        persistCache({
            cache,
            storage: AlphaStorage
        }).then(() => {
            client.onResetStore(async () => cache.writeData({ data: initData }));
            setClient(client);
        }).catch((e)=>{
            // console.log("cache error", e);
            // localStorage.clear();
            // window.location.reload()
        });

        return () => {};
    }, []);

    if (iClient === undefined) return (
        <div>Loading....</div>
    );

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
