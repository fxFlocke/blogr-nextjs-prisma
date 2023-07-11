import React from 'react';
import dynamic from "next/dynamic";
import ScrollPage from "./Scrollpage";
import { Post } from '../Types';

var postings: Post[]
var noteSubmit: (arg1: string, arg2: string, arg3: string) => void

const ScrollPageLoader = dynamic(() => import("../3DContent/ScrollModelAnimation"), {
    ssr: false,
    loading: () => <ScrollPage posts={postings} noteSubmitHandler={noteSubmit}/>,
});

const Scroll = ({posts, noteSubmitHandler}: {posts: Post[], noteSubmitHandler: (arg1: string, arg2: string, arg3: string) => void}) => {

    postings = posts
    noteSubmit = noteSubmitHandler

    return(
        <div className='w-full'>
            <div>
                <ScrollPageLoader/>
            </div>
        </div>
    );
};

export default Scroll;