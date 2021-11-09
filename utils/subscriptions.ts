import gql from "graphql-tag";

export const iMESSAGE = gql`
    subscription variables($chat:ID!){
        iMessage(chat: $chat){
            id
            message
            user{
                id
                name
                image
            }
            chat{
                id
            }
            createdAt
        }

    }
`;

export const NEW_CHAT = gql`
    subscription{
        chat{
            id
            users{
                id
                name
                image
            }
        }
    }
`;

export const NOTIFY = gql`
    subscription{
        notify{
            id
            description
            image
            screen
            path
            seen
            createdAt
        }
    }
`;
