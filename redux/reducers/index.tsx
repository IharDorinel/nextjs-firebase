import articlesReducer from "./ArticleReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    articles: articlesReducer
})

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>