// @ts-ignore
import {TPost} from "./reducer";
import {HYDRATE} from "next-redux-wrapper";

export enum Articles {
    LOAD_DATA = 'LOAD_DATA',
    LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
    LOAD_ONE_ARTICLE = 'LOAD_ONE_ARTICLE',
    LOAD_ONE_ARTICLE_SUCCESS = 'LOAD_ONE_ARTICLE_SUCCESS',
    FAILURE = 'FAILURE',
    HYDRATE = 'HYDRATE',
}

interface LoadArticlesAction {
    type: Articles.LOAD_DATA
}

interface LoadOneArticleAction {
    type: Articles.LOAD_ONE_ARTICLE
}

interface LoadArticlesSuccessAction {
    type: Articles.LOAD_DATA_SUCCESS,
    payload: TPost[]
}

interface LoadOneArticleSuccessAction {
    type: Articles.LOAD_ONE_ARTICLE_SUCCESS,
    payload: TPost
}

interface ErrorAction {
    type: Articles.FAILURE,
    payload: string
}

interface HYDRATEAction {
    type: typeof HYDRATE,
    payload: any
}

export type PostsActions = LoadArticlesAction | LoadOneArticleAction | LoadArticlesSuccessAction | LoadOneArticleSuccessAction | ErrorAction | HYDRATEAction

export function failure(error: unknown) {
    return {
        type: Articles.FAILURE,
        error
    }
}

export function loadData() {
    return { type: Articles.LOAD_DATA}
}


