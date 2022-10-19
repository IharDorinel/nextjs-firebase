import {Articles, PostsActions} from "../actions";
import {HYDRATE} from "next-redux-wrapper";

export type TPost = {
    title: string,
    body: string,
    image: string,
    id: string
}

interface IPostsReducer {
    articles: TPost[],
    oneArticle: TPost | null,
    error: boolean
}

const initialState: IPostsReducer = {
    articles: [],
    oneArticle: null,
    error: false
}

const articlesReducer = (state = initialState, action: PostsActions) => {

    switch(action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.articles }
        }
        case Articles.LOAD_DATA_SUCCESS: {
            return {
                ...state,
                articles: action.payload
            }
        }
        case Articles.LOAD_ONE_ARTICLE_SUCCESS: {
            return {
                ...state,
                oneArticle: action.payload
            }
        }
        case Articles.FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default articlesReducer