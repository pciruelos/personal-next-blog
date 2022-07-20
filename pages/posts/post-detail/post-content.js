import React from "react";
import Postheader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

import Image from "next/image";

function Postcontent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={500}
              height={500}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>
    },
  };

  return (
    <article className={classes.content}>
      <Postheader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default Postcontent;
