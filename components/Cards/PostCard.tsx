import { Post } from "../Types";

export default function PostCard({post}: {post: Post}){
    return(
        <>
            <div className="flex-col items-center w-[350px] h-[400px] bg-[#440707] px-2  rounded-2xl">
                <div>
                <div className="text-lg flex justify-center mt-2 mb-2">
                        {post.title}
                </div>
                <div className="flex flex-col items-center px-4 justify-center text-center max-w-sm h-[310px] overflow-hidden rounded-lg shadow-lg bg-[#360808]">
                    <div className="grid grid-cols-1">
                        <p>{post.content}</p>
                    </div>
                </div>
                <div className="px-6 py-4 grid text-center text-xs">
                    <p>{post.author}</p>
                </div>
                </div>
            </div>
        </>
    )
}