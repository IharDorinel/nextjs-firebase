import {Articles, failure} from "../actions";
import {put, all, takeLatest} from "redux-saga/effects";


const URL = 'https://6336acbf8aa85b7c5d30d1b5.mockapi.io/posts'


function* getArticlesSaga(): Generator<any, any, any> {

    try {
        const res = yield fetch(URL)
        const data = yield res.json()
        yield put({
            type: Articles.LOAD_DATA_SUCCESS,
            payload: data
        })
    } catch (err) {
        yield put(failure(err))
    }
}

function* getOneArticleSaga({id}: {id: string}): Generator<any, any, any> {

    try {
        const res = yield fetch(`${URL}/${id}`)
        const data = yield res.json()
        yield put({
            type: Articles.LOAD_ONE_ARTICLE_SUCCESS,
            payload: data
        })
    } catch (err) {
        console.log(err)
    }
}

function* rootSaga() {
    yield all([
        //@ts-ignore
        takeLatest(Articles.LOAD_DATA, getArticlesSaga), takeLatest(Articles.LOAD_ONE_ARTICLE, getOneArticleSaga)
    ])
}

export default rootSaga



