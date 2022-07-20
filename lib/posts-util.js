import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "content");

export function getPostFiles() {
 return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPost() {
  const postFiles = getPostFiles()

  // for (const postFile of postFiles) {
  //   const postData = getPostData(postFile)
  // }
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

  return sortedPosts
}

export function getFeaturedPosts() {

    const allPosts = getAllPost();

    const featuredPosts = allPosts.filter(p => p.isFeatured);

    return featuredPosts;
}
