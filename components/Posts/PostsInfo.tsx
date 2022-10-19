import {useTypedSelector} from "../../hooks/hooks";
import {useRouter} from "next/router";
import {TPost} from "../../redux/reducers/ArticleReducer";


const PostsInfo = () => {

    const posts = useTypedSelector((state) => state.articles.articles)
    const router = useRouter()


    return (
        <div className="flex gap-10 flex-col lg:flex-row lg:flex-wrap m-5 w-full">
            {posts?.map((el: TPost) => (
                    <div className="lg:w-1/3 overflow-hidden relative" key={el.id}>
                        <div className="h-[300px] bg-cover bg-no-repeat rounded cursor-pointer ease-in duration-200 hover:scale-110"
                             style={{backgroundImage: `url(${el.image})`}}
                        onClick={() => router.push(`/posts/${el.id}`)}
                        />
                        <div className="bg-neutral-900 w-fit text-white p-3 rounded-tr-lg text-lg absolute bottom-0">
                            <div>{el.title}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PostsInfo