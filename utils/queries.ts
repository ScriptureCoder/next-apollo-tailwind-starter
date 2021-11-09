import gql from "graphql-tag";

export const ME = gql`
    query {
        me{
            name
            id
            email
            image
            handle
            notifications
        }
    }
`;

export const SUBSCRIPTIONS = gql`
    query {
        mySubscriptions{
            id
            institution{
                id
                name
                handle
            }
        }
    }
`;

export const VEIW_SUBSCRIPTION = gql`
    query ViewSubscription($id:ID!) {
        viewSubscription(id:$id){
            id
            institution{
                id
                name
            }
            modules{
                id
                name
                books{
                    id
                    title
                    author
                    image
                }
            }
        }
    }
`;


export const READ = gql`
    query Read($id:ID!) {
        read(id:$id){
            id
            title
            image
            slug
            type
            description
            price
            currency{
                id
                sign
                slug
                name
            }
            author {
                id
                name
                image
                bio
            }
            user{
                id
                name
            }
            contents{
                id
                title
                audio
            }
            preview
        }
        bookProgress(key:$id){
            id
            scrollPosition
            lastPage
        }
    }
`;

export const GET_PAGE = gql`
    query Variables($book:ID! $page:ID! $type:Int! $app:Boolean) {
        page(book:$book page: $page type:$type app:$app){
            id
            title
            content
            audio
        }
    }
`;

export const NOTES = gql`
    query Notes($user: ID $createdAt:String) {
        notes(user:$user createdAt:$createdAt){
            id
            content
            createdAt
        }
    }
`;

export const NOTEFEED = gql`
    query NoteFeed($page:Int, $limit: Int) {
        noteFeed(page: $page limit: $limit){
            pagination{
                limit
                page
                total
            }
            notes{
                id
                content
            }
        }
    }
`;

export const FEATURES = gql`
    query {
        features{
            id
            title
            price
            slug
            image
            description
            author{
                id
                name
                bio
            }
            currency{
                id
                sign
                name
            }
            user{
                id
                name
            }
            createdAt
        }
    }
`;


export const RANDOM = gql`
    query {
        random{
            id
            title
            price
            image
            slug
            description
            author{
                id
                name
                bio
            }
            user{
                id
                name
            }
        }
    }
`;


export const FREE = gql`
    query FREE($page:Int, $limit: Int) {
        free(page: $page limit: $limit){
            books{
                id
                title
                price
                slug
                image
                description
                author{
                    id
                    name
                    bio
                }
            }
            pagination{
                limit
                total
                page
            }
        }
    }
`;


export const LATEST = gql`
    query Variables($page:Int, $limit: Int) {
        latest(page: $page limit: $limit){
            books{
                id
                title
                price
                slug
                image
                description
                author{
                    id
                    name
                    bio
                }
                user{
                    id
                    name
                }
            }
            pagination{
                limit
                total
                page
            }
        }
    }
`;


export const LATEST_BOOKS = gql`
    query Variables($createdAt:String, $limit: Int) {
        latestBooks(createdAt: $createdAt limit: $limit){
            id
            title
            price
            slug
            image
            description
            author{
                id
                name
                bio
            }
            currency{
                id
                sign
                name
            }
            user{
                id
                name
            }
            createdAt
        }
    }
`;

export const FEATURED_BOOKS = gql`
    query Variables($createdAt:String, $limit: Int) {
        featuredBooks(createdAt: $createdAt limit: $limit){
            id
            title
            price
            slug
            image
            description
            author{
                id
                name
                bio
            }
            currency{
                id
                sign
                name
            }
            user{
                id
                name
            }
            createdAt
        }
    }
`;

export const FEATURED_CATEGORIES = gql`
    query Variables($createdAt:String $limit: Int) {
        featuredCategories(createdAt: $createdAt limit: $limit){
            id
            name
            slug
            createdAt
        }
    }
`;


export const BOOKSHELF = gql`
    query var($createdAt:String $user:ID $limit:Int){
        bookshelf(createdAt:$createdAt user:$user limit:$limit){
            id
            book{
                id
                title
                price
                image
                slug
                description
                author{
                    id
                    name
                    bio
                }
                currency{
                    id
                    sign
                    name
                }
                user{
                    id
                    name
                }
            }
            createdAt
        }
    }
`;


export const FAVORITES = gql`
    query {
        favorites{
            id
            title
            price
            image
            slug
            description
            author{
                id
                name
                bio
            }
            user{
                id
                name
            }
        }
    }
`;


export const COUNTRIES = gql`
    query {
        countries{
            id
            name
        }
    }
`;

export const STATES = gql`
    query State($country: ID!) {
        states(countryId: $country){
            id
            name
        }
    }
`;

export const CATEGORIES = gql`
    query {
        categories{
            id
            name
            slug
        }
    }
`;

export const CATEGORY_BOOKS = gql`
    query CategoryBooks($slug:String! $id:ID $createdAt:String $limit:Int){
        categoryBooks(slug:$slug id:$id createdAt: $createdAt limit: $limit){
            id
            name
            slug
            books{
                id
                title
                image
                price
                slug
                description
                author{
                    id
                    name
                    bio
                }
                currency{
                    id
                    sign
                    name
                }
                user{
                    id
                    name
                }
                createdAt
            }

        }
    }
`;



export const BOOK = gql`
    query Book($slug: String, $id:ID){
        book(slug:$slug, id:$id){
            id
            title
            price
            description
            image
            slug
            commentCount
            audiobook
            length
            releasedAt
            categories{
                id
                name
                slug
            }
            author{
                id
                name
                bio
                image
            }
            user{
                id
                handle
                bio
                name
                image
                following
            }
            saved
            favorite
            related{
                id
                title
                price
                description
                image
                slug
                author{
                    id
                    name
                    bio
                }
            }
            currency{
                id
                sign
                slug
                name
            }
        }
    }
`;

export const FAVORITE = gql`
    query var($slug: String, $id:ID){
        favorite(slug:$slug, id:$id){
            id
        }
    }
`;

export const PROFILE = gql`
    query Var($handle:String){
        profile(handle:$handle){
            id
            name
            image
            cover
            bio
            dob
            handle
            country{
                id
                name
            }
            phone
            gender
            follows
            followers
            following
            isFriend
            chat{
                id
            }
        }
        wallet{
            id
            balance
            coin
            currency{
                id
                sign
                name
                slug
            }
        }
    }
`;

export const FRIENDS = gql`
    query Variables($user:ID $createdAt:String $limit:Int){
        friends(user:$user createdAt: $createdAt limit: $limit){
            id
            user{
                id
                image
                name
                handle
                chat{
                    id
                }
            }
        }
    }
`;

export const FRIEND_REQUEST = gql`
    query {
        friendRequests{
            id
            from{
                id
                image
                name
                handle
            }
        }
    }
`;

export const FRIENDS_PROGRESS = gql`
    query Variables($book:ID!){
        friendsProgress(book:$book){
            id
            user{
                id
                image
                name
                handle
                chat{
                    id
                }
            }
            progress {
                id
                percentage
                timeSpent
            }
        }
    }
`;

export const PROGRESS_REQUEST = gql`
    query {
        progressRequests{
            id
            from{
                id
                image
                name
                handle
            }
            book{
                id
                title
                image
                slug
                price
                status
                author {
                    id
                    name
                }
                currency{
                    id
                    sign
                    name
                }
                createdAt
            }
        }
    }
`;

export const SENT_FRIEND_REQUEST = gql`
    query {
        sentFriendRequests{
            id
            user{
                id
                image
                name
                handle
            }
        }
    }
`;

export const WALLET = gql`
    query{
        wallet{
            id
            balance
            coin
            currency{
                sign
                name
                slug
            }
        }
    }
`;


export const WALLETS = gql`
    query{
        wallets{
            id
            balance
            coin
            currency{
                id
                sign
                name
                slug
            }
        }
    }
`;

export const TRANSACTIONS = gql`
    query Variables($createdAt:String $limit:Int){
        transactions(createdAt: $createdAt limit: $limit){
            id
            type
            amount
            description
            currency{
                id
                sign
                name
                slug
            }
            createdAt
        }
    }
`;

export const DEEP_PAGE = gql`
    query Variables($handle:String!){
        deepPage(handle:$handle){
            id
            name
            image
            about
            currency{
                sign
                name
                slug
            }
            modules{
                id
                name
                price
                books{
                    id
                    title
                    image
                }
            }
        }
    }
`;

export const COURSES = gql`
    query {
        courses{
            id
            title
            image
            price
            institution{
                id
                name
            }
        }
    }
`;

export const I_COURSES = gql`
    query Variables($handle:String!){
        institutionCourses(handle:$handle){
            id
            title
            image
            price
            institution{
                id
                name
            }
        }
    }
`;

export const COURSE = gql`
    query Variable($id: ID!){
        course(id:$id){
            id
            title
            image
            price
            description
            wywl
            audience
            level
            requirement
            category{
                id
                name
            }
            institution{
                id
                name
            }
            instructors{
                id
                name
                bio
            }
        }
    }
`;


export const LECTURE = gql`
    query Variables($id: ID!){
        lecture(id: $id){
            id
            course{
                id
                title
                modules{
                    id
                    name
                    sections{
                        id
                        title
                        type
                        checked
                    }
                }
            }
        }
    }
`;

export const CONTENT = gql`
    query Variables($id:ID! $lecture:ID!){
        content(id:$id, lecture:$lecture){
            id
            content
        }
    }
`;

export const ASSESSMENT = gql`
    query Variables($lecture:ID!, $id:ID!){
        assessment(id:$id, lecture:$lecture){
            id
            title
            description
            questions{
                id
                detail
                type
                point
                options{
                    value
                }
            }
            score{
                id
                score
                percentage
                grade
            }
        }
    }
`;

export const MY_COURSES = gql`
    query {
        myCourses{
            id
            title
            image
            price
            institution{
                id
                name
            }
        }
    }
`;


export const SEARCH = gql`
    query Variables($keyword:String!){
        search(keyword:$keyword){
            books{
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
    }
`;


export const SEARCH_BOOKS = gql`
    query Variables($keyword:String $createdAt:String $limit:Int){
        searchBooks(keyword:$keyword createdAt:$createdAt limit:$limit){
            id
            title
            image
            slug
            price
            author {
                id
                name
            }
            user{
                id
                name
                handle
            }
            currency{
                id
                sign
                name
                slug
            }
            createdAt
        }
    }
`;

export const SEARCH_USERS = gql`
    query Variables($keyword:String! $createdAt:String $limit:Int){
        searchUsers(keyword:$keyword createdAt:$createdAt limit:$limit){
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

export const SEARCH_AUTHORS = gql`
    query Variables($keyword:String! $createdAt:String $limit:Int){
        searchAuthors(keyword:$keyword createdAt:$createdAt limit:$limit){
            id
            name
            image
            handle
        }
    }
`;


export const CHAT = gql`
    query Variables($id:ID){
        messages(chat:$id){
            id
            message
            user{
                id
                name
            }
            createdAt
        }
    }
`;


export const AUTHORS = gql`
    query{
        authors{
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

export const BOOKS = gql`
    query Books($createdAt:String $limit:Int){
        books(
            createdAt:$createdAt
            limit:$limit
        ){
            id
            title
            image
            slug
            price
            status
            author {
                id
                name
            }
            createdAt
        }
    }
`;

export const PUBLISHED = gql`
    query Var($createdAt:String $user:ID! $limit:Int){
        publishedBooks(
            user:$user
            createdAt:$createdAt
            limit:$limit
        ){
            id
            title
            image
            slug
            price
            status
            author {
                id
                name
            }
            createdAt
        }
    }
`;

export const CONTENTS = gql`
    query BookContent($id:ID!){
        bookContent(id:$id){
            id
            title
            image
            status
            author{
                id
                name
                bio
            }
            categories{
                id
                name
            }
            contents{
                id
                title
                audio
            }
        }
    }
`;

export const COMMENTS = gql`
    query var($book:ID! $createdAt:String $limit:Int $parent:ID){
        comments(book:$book createdAt:$createdAt limit:$limit parent:$parent){
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
            likeCount
            liked
        }
    }
`;

export const COMMENT = gql`
    query var($id:ID!){
        comment(id:$id){
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
            likeCount
            liked
        }
    }
`;

export const REPLIES = gql`
    query var($id:ID! $createdAt:String){
        replies(parent:$id createdAt:$createdAt){
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
            likeCount
            liked
        }
    }
`;

export const DISCUSSION_REPLIES = gql`
    query var($id:ID! $createdAt:String){
        discussionReplies(parent:$id createdAt:$createdAt){
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
            likeCount
            liked
        }
    }
`;

export const DISCUSSIONS = gql`
    query Variables($book:ID! $page:ID! $createdAt:String){
        discussions(book:$book page:$page createdAt:$createdAt){
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
            likeCount
            liked
        }
    }
`;

export const CHATS = gql`
    query Variables($book:ID! $page:ID!){
        discussions(book:$book page:$page){
            id
            user{
                id
                image
                name
                handle
            }
            message
            createdAt
        }
    }
`;

export const CHAT_HEAD = gql`
    query Variables($id:ID!){
        chat(id:$id){
            id
            users{
                id
                name
            }
        }
    }
`;



export const MESSAGES = gql`
    query Variables($id:ID!){
        messages(chat:$id app:true){
            id
            message
            user{
                id
                name
                image
            }
            createdAt
        }
    }
`;


export const RECENT_CHATS = gql`
    query {
        chats{
            id
            users{
                id
                name
                handle
                image
            }
            lastMessage{
                id
                createdAt
            }
            unread
        }
    }
`;

export const READ_CHAT = gql`
    query Var($id:ID!){
        chat(id:$id){
            id
        }
    }
`;


export const FOLLOWS = gql`
    query Var($handle:String! $createdAt:String $type:String!){
        follows(handle:$handle createdAt:$createdAt type:$type){
            id
            user{
                id
                name
                image
                bio
                handle
                following
            }
        }
    }
`;


export const POPULAR_CATEGORIES = gql`
    query {
        popularCategories{
            id
            image
            category{
                id
                name
                slug
            }
        }
    }
`;



export const NOTIFICATIONS = gql`
    query {
        notifications{
            id
            description
            path
            image
            screen
            seen
            params
            createdAt
        }
    }
`;

export const POST = gql`
    query Var($slug:String!){
        post(slug:$slug){
            id
            title
            slug
            content
            createdAt
        }
    }
`;


export const ACCOUNTS = gql`
    query {
        accounts{
            id
            name
            number
            bank
        }
    }
`;



export const LAST_READ = gql`
    query Var($user:ID!){
        lastRead(user:$user){
            id
            key
            book{
                id
                title
                price
                image
                slug
                description
                author{
                    id
                    name
                    bio
                }
                user{
                    id
                    name
                }
            }
            visibility
            percentage
            timeSpent
        }
    }
`;

export const PROGRESS = gql`
    query Variables($key:ID!){
        bookProgress(key:$key){
            id
            scrollPosition
            lastPage
        }
    }
`;

export const READ_HISTORY = gql`
    query Var($createdAt:String $limit:Int){
        readHistory(limit:$limit createdAt:$createdAt){
            id
            key
            book{
                id
                title
                price
                image
                slug
                description
                author{
                    id
                    name
                    bio
                }
                user{
                    id
                    name
                }
            }
            visibility
            percentage
            timeSpent
            createdAt
        }
    }
`;

export const AUTHOR = gql`
    query Variables($id:ID!){
        author(id:$id){
            id
            bio
            handle
            image
            books{
                id
                title
                price
                image
                slug
                description
                author{
                    id
                    name
                    bio
                }
                user{
                    id
                    name
                }
                currency{
                    id
                    sign
                    name
                    slug
                }
            }
        }
    }
`;
