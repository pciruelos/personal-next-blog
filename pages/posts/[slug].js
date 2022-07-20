import React from 'react'
import { getPostData, getPostFiles } from '../../lib/posts-util';
import Postcontent from './post-detail/post-content'

function Postdetailpage(props) {
  return (
    <Postcontent post={props.post}/>
  )
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate:600
    };
}

export function getStaticPaths() {

    const postFilenames = getPostFiles()

    const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ""))

    return {
        paths: slugs.map(slug => ({ params: {slug: slug} }) ),
        fallback: false
    }
}

export default Postdetailpage  

