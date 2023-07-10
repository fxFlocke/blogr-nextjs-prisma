import React from "react"
import { Post } from "../components/Types"
import prisma from "../lib/prisma"
import Header from "../components/Structure/Header"
import Scroll from "../components/Structure/Scroll"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany() 

  return { 
    props: { feed }, 
    revalidate: 10 
  }
}

function Home(props){

  return(
    <div className="w-full h-full bg-[#60140c]">
      <Header/>
      <Scroll posts={props.feed}/>
    </div>
  )
}

export default Home