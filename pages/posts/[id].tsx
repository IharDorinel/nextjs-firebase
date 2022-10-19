import {wrapper} from "../../redux";
import Post from "../../components/Posts/Post";
import {Articles} from "../../redux/actions";
import {END} from "redux-saga";


function ArticlePage() {

    return (
        <div>
            <Post />
        </div>
    )
}

export default ArticlePage;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({params}) => {
    // @ts-ignore
    if(!store.getState().oneArticle) {
        // @ts-ignore
        store.dispatch({ type: Articles.LOAD_ONE_ARTICLE, id: params?.id})
        // @ts-ignore
        store.dispatch(END)
    }
    // @ts-ignore
    await store.sagaTask.toPromise()

})

