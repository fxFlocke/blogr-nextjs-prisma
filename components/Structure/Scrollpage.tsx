import { forwardRef } from "react";
import Greetings from "../Sections/Greetings";
import Academics from "../Sections/Academics";
import VideoDemo from "../Sections/VideoDemo";
import DexInfo from "../Sections/DexInfo";
import Guestbook from "../Sections/Guestbook";
import { Post } from "../Types";

var postings: Post[]
var noteSubmit: (arg1: string, arg2: string, arg3: string) => void

export const DivContainer = forwardRef<HTMLInputElement>(({ children }, ref) => (
    <>
        <div ref={ref} className="fixed top-0 left-0 outline-none"></div>
        <section className="grid relative text-lg uppercase pt-[20px] md:pt-[25px] md:pl-[25px] 2xl:pt-[120px] 2xl:pl-[120px] text-zinc-400"  id='top'>
            <Greetings/>
        </section>
        <section className="grid items-center relative text-lg pt-[350px] md:pt-[500px] lg:pt-[140px] text-zinc-400">
            <Academics/>
        </section>
        <section className="grid items-center relative text-lg pt-[350px] md:pt-[500px] lg:pt-[140px] text-zinc-400">
            <VideoDemo/>
        </section>
        <section className='grid items-center relative text-lg pt-[150px] text-zinc-400'>
                <DexInfo/>
        </section>
        <section className="grid items-center relative text-lg uppercase pt-[50px] font-neue text-[#ffeded]" id='gallery'>
            <Guestbook posts={postings} noteSubmitAPI={noteSubmit}/>
        </section>
        <br></br>
    </>
));

const Loader = ({posts, noteSubmitHandler}: {posts: Post[], noteSubmitHandler: (arg1: string, arg2: string, arg3: string) => void}) => {

    postings = posts
    noteSubmit = noteSubmitHandler

    return (
        <DivContainer/>
    )
}
export default Loader;