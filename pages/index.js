import {Fragment} from 'react'

import Featuredposts from '../components/home-page/Featuredposts'
import Hero from '../components/home-page/Hero'
import { getFeaturedPosts } from '../lib/posts-util'

function Homepage(props) {
  return (<Fragment>
    <Hero />
    <Featuredposts posts={props.posts}/>
  </Fragment>
  )
}

export function getStaticProps() {

    const featuredPosts = getFeaturedPosts(); 

  return {
    props: {
        posts: featuredPosts
    },
}
}


export default Homepage