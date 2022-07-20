import React from 'react'
import Postitem from './post-item'
import classes from './posts-grid.module.css'

function PostsGrid(props) {
    const { posts } = props;

  return (
    <ul className={classes.grid}>
        {posts.map(p => <Postitem post={p} key={p.slug} />)}
    </ul>
  )
}

export default PostsGrid