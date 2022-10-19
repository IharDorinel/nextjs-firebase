import type { NextPage } from 'next'
import {wrapper} from "../redux";
import PostsInfo from "../components/Posts/PostsInfo";
import {loadData} from "../redux/actions";
import {END} from "redux-saga";


type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IPosts {
    posts: Posts[]
}

const Posts: NextPage<IPosts> = () => {

    return (
        <div>
            Posts
            <PostsInfo />
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
    // @ts-ignore
    store.dispatch(loadData())
    // @ts-ignore
    store.dispatch(END)
    // @ts-ignore
    await store.sagaTask.toPromise()
})

export default Posts