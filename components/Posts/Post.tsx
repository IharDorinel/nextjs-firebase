import {useTypedSelector} from "../../hooks/hooks";
import {useRouter} from "next/router";


const Post = () => {
// @ts-ignore
    const article = useTypedSelector((state) => state.articles.oneArticle)
    const router = useRouter()


    return (
        <div className="w-full flex items-center justify-center">
            {article && <div className="flex flex-col w-full lg:w-1/2 text-center">
                <div className="lg:text-3xl m-3">{article.title}</div>
                <img src={article.image} alt={article.image}/>
                <div className="lg:text-3xl m-3">{article.text}</div>
                <button className="p-2 hover:bg-blue-300 bg-blue-200 m-3 rounded-2xl text-white text-xl" onClick={() => router.back()}>Go back</button>
            </div>
            }
        </div>

    )
}

export default Post;