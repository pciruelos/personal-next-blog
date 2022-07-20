import React from 'react'
import Allposts from '../../components/posts/all-posts'
import { getAllPost } from '../../lib/posts-util'

function AllPostsPage(props) {
  
  return (
    <Allposts posts={props.posts}/>
  )
}

export function getStaticProps() {

  const allPosts = getAllPost(); 

return {
  props: {
      posts: allPosts
  },
}
}

export default AllPostsPage