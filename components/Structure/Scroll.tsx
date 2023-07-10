import React from 'react';
import dynamic from "next/dynamic";
import ScrollPage from "./Scrollpage";
import { Post } from '../Types';

var postings: Post[]

const ScrollPageLoader = dynamic(() => import("../3DContent/ScrollModelAnimation"), {
    ssr: false,
    loading: () => <ScrollPage posts={postings}/>,
});

const Scroll = ({posts}: {posts: Post[]}) => {

    postings = posts

    return(
        <div className='w-full'>
            <div>
                <ScrollPageLoader/>
            </div>
        </div>
    );
};

export default Scroll;