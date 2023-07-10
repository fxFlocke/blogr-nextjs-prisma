import { useState } from "react";
import PostCard from "../Cards/PostCard";
import { Post } from "../Types";

export default function Guestbook({posts}: {posts: Post[]}){

    const [cards, setCards] = useState<Post[] | undefined>(posts);

    return(
        <>
        <section className="grid items-center relative text-lg uppercase pt-[75px] pb-[50px] font-neue">
          <div className="flex flex-col items-center">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 2xl:gap-18 font-inter">
              {cards.map((post: Post) => (
                <PostCard key={post.id} post={post} />
              ))}
              
            </div>
          </div>
        </section>
        </>
    )
}