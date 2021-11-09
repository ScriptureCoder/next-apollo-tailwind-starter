import gql from "graphql-tag";

export const SIGNUP = gql`
    mutation SignUp($email: String! $password: String! $name: String! $gender: String $dob: String $deviceToken: String $deviceName:String) {
        signUp(
            email: $email
            password: $password
            name: $name
            dob:$dob
            gender:$gender
            deviceToken: $deviceToken
            deviceName: $deviceName
        ){
            token
            user {
                name
                id
                email
                image
                handle
            }
        }
    }
`;

export const SIGNIN = gql`
    mutation SignIn($email: String! $password: String! $deviceToken: String $deviceName:String) {
        signIn(
            email: $email
            password: $password
            deviceToken: $deviceToken 
            deviceName: $deviceName
        ){
            token
            user {
                name
                id
                email
                image
                handle
            }
        }
    }
`;

export const OAUTH = gql`
    mutation Oauth($email: String! $provider: String! $name:String! $image:String $ref:String $deviceToken: String $deviceName:String) {
        oauth(
            email: $email
            provider: $provider
            name: $name
            image: $image
            ref: $ref
            deviceToken: $deviceToken
            deviceName: $deviceName
        ){
            token
            user {
                name
                id
                email
                image
                handle
            }
        }
    }
`;

export const CHANGE_PASSWORD = gql`
    mutation changePassword($oldPassword: String! $newPassword: String!) {
        changePassword(
            oldPassword: $oldPassword
            newPassword: $newPassword
        )
    }
`;

export const FORGOT = gql`
    mutation ForgotPassword($email: String!) {
        forgotPassword(
            email: $email
        )
    }
`;

export const RESET = gql`
    mutation ResetPassword($password: String!, $token: String!) {
        resetPassword(
            password: $password
            token: $token
        )
    }
`;

export const UPDATE_INSTITUTION = gql`
    mutation UpdateInstitution($name: String! $handle:String! $about: String $image:String ) {
        updateInstitution(
            name:$name
            handle:$handle
            about:$about
            image:$image
        ){
            id
        }
    }
`;

export const EDIT_PROFILE = gql`
    mutation editProfile($name: String! $handle: String! $image:String $cover:String $dob: String! $bio: String $country: ID! $phone: String!  $gender: String! ) {
        editProfile(
            name:$name
            handle:$handle
            image:$image
            cover:$cover
            dob:$dob
            bio:$bio
            country:$country
            phone:$phone
            gender:$gender
        ){
            id
            name
            handle
            image
            cover
            bio
            dob
            phone
            gender
        }
    }
`;

export const EDIT_PROFILE_IMAGE = gql`
    mutation editProfileImage($image:String!) {
        editProfileImage(
            image:$image
        ){
            id
            image
        }
    }
`;

export const SUBSCRIBE = gql`
    mutation Subscribe($pin: String!) {
        subscribe(
            pin:$pin
        ){
            id
            institution{
                id
                name
            }
        }
    }
`;

export const SAVE_NOTE = gql`
    mutation SaveNote($id: ID, $content: String!, $book_id: ID) {
        saveNote(
            id: $id
            content: $content
            book_id: $book_id
        ){
            id
            content
            createdAt
        }
    }
`;


export const DELETE_NOTE = gql`
    mutation DeleteNote($id: ID!) {
        deleteNote(
            id: $id
        ){
            id
        }
    }
`;

export const ADD_TO_BOOKSHELF = gql`
    mutation AddToBookshelf($id: ID!) {
        addToBookshelf(
            id: $id
        ){
            id
        }
    }
`;

export const ADD_TO_HISTORY = gql`
    mutation AddToHistory($id: ID!) {
        addToHistory(
            id: $id
        ){
            id
        }
    }
`;

export const CREATE_FAVORITE = gql`
    mutation CreateFavorite($id: ID!) {
        createFavorite(id:$id){
            id
        }
    }
`;

export const FUND_WALLET = gql`
    mutation FundWallet($txRef: String! $currency:String){
        fundWallet(txRef:$txRef currency:$currency){
            id
            name
            email
            image
            transactions{
                id
                type
                amount
                description
                createdAt
            }
            wallet{
                id
                balance
                coin
            }
        }
    }
`;

export const BUY = gql`
    mutation Buy($id: ID!){
        buy(id: $id){
            id
            title
            price
            image
            slug
            author{
                id
                name
            }
            createdAt
        }
    }
`;

export const SUBSCRIBE_ONLINE = gql`
    mutation Variables($institution: ID!, $module: ID!){
        subscribeOnline(institution: $institution module:$module){
            id
            institution{
                id
                name
                handle
            }
        }
    }
`;

export const CONTACT = gql`
    mutation Contact($email: String!, $subject: String!, $name: String, $message: String!){
        contact(email:$email subject:$subject name:$name message:$message){
            id
        }
    }
`;

export const ENROLL = gql`
    mutation Variables($id:ID!){
        enroll(id:$id){
            id
        }
    }
`;

export const SAVE_AUTHOR = gql`
    mutation SaveAuthor($id: ID $name: String! $bio:String! $image:String) {
        saveAuthor(
            id: $id
            name: $name
            image: $image
            bio: $bio
        ){
            id
            name
            image
            handle
            bio
            books{
                id
            }
        }
    }
`;


export const SAVE_BOOK = gql`
    mutation SaveBook($id: ID, $title: String!, $authorId: ID!, $image:String, $description: String, $price: Int, $categories: [ID] ) {
        saveBook(id: $id, title:$title, authorId:$authorId, description:$description, image:$image, price: $price, categories: $categories){
            id
            title
            slug
            image
            price
            status
            categories{
                id
                name
            }
            author{
                id
                name
            }
        }
    }
`;

export const UPLOAD_BOOK_CONTENT = gql`
    mutation Variables($content: String, $book_id: ID! ) {
        uploadBookContent(content:$content, book_id:$book_id)
    }
`;

export const SAVE_BOOK_CONTENT = gql`
    mutation SaveBookContent($id:ID $title: String!, $content: String, $book_id: ID! ) {
        saveBookContent(id:$id title:$title, content:$content, book_id:$book_id){
            id
            title
            content
            audio
        }
    }
`;

export const DELETE_CONTENT = gql`
    mutation DeleteBookContent($id: ID!) {
        deleteBookContent(
            id: $id
        ){
            id
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation DeleteBook($id: ID!) {
        deleteBook(
            id: $id
        ){
            id
        }
    }
`;

export const DELETE_FROM_BOOKSHELF = gql`
    mutation Var($id: ID!) {
        deleteFromBookshelf(
            id: $id
        ){
            id
        }
    }
`;

export const DELETE_DELETE_MESSAGE = gql`
    mutation Var($id: ID!) {
        deleteDiscussionMessage(
            id: $id
        ){
            id
            parent{
                id
            }
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation Var($id: ID!) {
        deleteComment(
            id: $id
        ){
            id
            parent{
                id
            }
        }
    }
`;


export const PUBLISH_BOOK = gql`
    mutation PublishBook($id:ID!) {
        publishBook(
            id: $id
        ){
            id
            status
        }
    }
`;

export const SORT_PAGES = gql`
    mutation Variables($id:ID!, $pages:[ID]) {
        sortPages(
            id: $id
            pages: $pages
        )
    }
`;

export const GENERATE_AUDIO = gql`
    mutation GenerateAudio($id: ID $language: String! $voice: String! $text: String! $fee:String!) {
        generateAudio(
            id: $id
            language: $language
            voice: $voice
            text: $text
            fee: $fee
        ){
            id
            title
            audio
        }
    }
`;

export const SAVE_ACCOUNT = gql`
    mutation Variables($id: ID, $name:String!, $number:String!, $bank:String!) {
        saveAccount(
            id: $id
            name: $name
            number: $number
            bank: $bank
        ){
            id
            name
            number
            bank
        }
    }
`;


export const WITHDRAW = gql`
    mutation Variables($id: ID, $account: ID!, $amount: Int!, $remark: String) {
        withdraw(
            id: $id
            account: $account
            amount: $amount
            remark: $remark
        ){
            id
            account{
                id
                number
            }
            status
            amount
            remark
            createdAt
        }
    }
`;

export const BOOK_COMMENT = gql`
    mutation Variables($book: ID! $comment: String! $parent: ID){
        saveComment(book: $book comment:$comment parent: $parent){
            id
            comment
            user{
                id
                image
                handle
                name
            }
            edited
            createdAt
            repliesCount
            parent{
                id
                repliesCount
            }
        }
    }
`;

export const REPLY_COMMENT = gql`
    mutation Variables($id: ID! $comment: String! $parent: ID!){
        replyComment(id: $id comment:$comment  parent: $parent){
            id
            comment
            user{
                id
                image
                handle
                name
            }
            parent{
                id
                repliesCount
            }
            createdAt
            repliesCount
        }
    }
`;

export const SAVE_DISCUSSION_MESSAGE = gql`
    mutation Variables($book:ID! $page:ID! $comment:String! $parent:ID){
        saveDiscussionMessage(book:$book page:$page comment:$comment parent:$parent){
            id
            comment
            user{
                id
                image
                handle
                name
            }
            edited
            createdAt
            repliesCount
            parent{
                id
                repliesCount
            }
        }
    }
`;

export const EDIT_DISCUSSION = gql`
    mutation Variables($id:ID! $comment:String!){
        editDiscussion(id:$id comment:$comment){
            id
            comment
            edited
            createdAt
        }
    }
`;

export const EDIT_COMMENT = gql`
    mutation Variables($id:ID! $comment:String!){
        editComment(id:$id comment:$comment){
            id
            comment
            edited
            createdAt
        }
    }
`;

export const CREATE_REPORT = gql`
    mutation Variables($book:ID! $flag:String! $comment:String){
        createReport(book:$book flag:$flag comment:$comment){
            id
        }
    }
`;


export const LIKE_DISCUSSION = gql`
    mutation Variables($id:ID!){
        likeDiscussion(id:$id){
            id
        }
    }
`;

export const LIKE_COMMENT = gql`
    mutation Variables($id:ID!){
        likeComment(id:$id){
            id
        }
    }
`;



export const CREATE_MESSAGE = gql`
    mutation Variables($recipient:ID $id:ID $chat:ID $message:String! $parent:ID) {
        sendMessage(id: $id chat: $chat message: $message parent: $parent recipient: $recipient){
            id
            message
            chat{
                id
            }
            createdAt
            recipient{
                id
                chat{
                    id
                }
            }
        }
    }
`;


export const DELETE_MESSAGE = gql`
    mutation Variables($id:ID!){
        deleteMessage(id:$id){
            id
        }
    }
`;


export const FOLLOW = gql`
    mutation Variables($id:ID!){
        follow(id:$id){
            id
            user{
                id
                following
            }
        }
    }
`;


export const DELETE_ACCOUNT = gql`
    mutation Variables($id:ID!){
        deleteAccount(id:$id){
            id
        }
    }
`;
export const DELETE_HISTORY = gql`
    mutation Variables($key:ID!){
        deleteHistory(key:$key){
            id
        }
    }
`;

export const SAVE_PROGRESS = gql`
    mutation Variables($key:ID! $percentage:Float $scrollPosition:Float $audio:Float $lastPage:Int){
        saveProgress(key:$key percentage:$percentage scrollPosition:$scrollPosition audio:$audio lastPage:$lastPage){
            id
        }
    }
`;

export const SAVE_TIME_SPENT = gql`
    mutation Variables($key:ID! $timeSpent:Int!){
        saveTimeSpent(key:$key timeSpent:$timeSpent ){
            id
        }
    }
`;

export const UPDATE_VISIBILITY = gql`
    mutation Variables($key:ID! $visibility:String!){
        updateVisibility(key:$key visibility:$visibility){
            id
            visibility
        }
    }
`;

export const SEND_FRIEND_REQUEST = gql`
    mutation Variables($user:ID!){
        sendFriendRequest(user:$user){
            id
        }
    }
`;

export const SEND_TRACKER_REQUEST = gql`
    mutation Variables($user:ID $book:ID! $email:String $name:String){
        sendTrackerRequest(book:$book user:$user email:$email name:$name){
            id
        }
    }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
    mutation Variables($id:ID!){
        acceptFriendRequest(id:$id){
            id
        }
    }
`;

export const DELETE_FRIEND_REQUEST = gql`
    mutation Variables($id:ID!){
        deleteFriendRequest(id:$id){
            id
        }
    }
`;

export const ACCEPT_READ_REQUEST = gql`
    mutation Variables($id:ID!){
        acceptReadRequest(id:$id){
            id
        }
    }
`;

export const DELETE_READ_REQUEST = gql`
    mutation Variables($id:ID!){
        deleteReadRequest(id:$id){
            id
        }
    }
`;

export const UNFRIEND = gql`
    mutation Variables($id:ID!){
        unFriend(user:$id){
            id
        }
    }
`;

export const SEARCH_BOOKS = gql`
    mutation Variables($keyword:String!){
        searchBooks(keyword:$keyword){
            id
            title
            image
            slug
            author {
                id
                name
            }
            createdAt
        }
    }
`;

export const SEARCH_USERS = gql`
    mutation Variables($keyword:String!){
        searchUsers(keyword:$keyword){
            id
            name
            image
            handle
            chat{
                id
            }
        }
    }
`;
