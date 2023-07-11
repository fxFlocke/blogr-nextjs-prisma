import React, { useEffect, useState } from "react"
import { Post } from "../components/Types"
import prisma from "../lib/prisma"
import Header from "../components/Structure/Header"
import Scroll from "../components/Structure/Scroll"
import { GetServerSideProps, GetStaticProps } from "next"
import { useRouter } from "next/router"

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany() 

  return { 
    props: { feed }
  }
}

function Home(props){
  
  const router = useRouter()
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    setIsRefreshing(false);
  }, [props]);

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  async function submitNote(title, content, author){
    try{
      const body = { title, content, author }
      await fetch("api/post", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
      })
      }catch(err){
        console.error(err)
      }
  }

  return(
    <div className="w-full h-full bg-[#60140c]">
      <Header/>
      <Scroll posts={props.feed} noteSubmitHandler={submitNote}/>
    </div>
  )
}

export default Home