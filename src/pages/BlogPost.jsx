/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import data from "../assets/Data.json";
import { Outlet, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  //   const [blogPosts] = useState(data?.blogPosts);

  const singlePost = data.blogPosts?.find((post) => post?.id == slug);
  if (!singlePost) {
    return <h1>Post not found</h1>;
  }
  return (
    <div className="bg-red-700 p-40">
      <h2 className="text-white text-center">{singlePost.title}</h2>
      <img src={singlePost.image} alt="" />
      <p className="text-white">{singlePost.description}</p>
    </div>
  );
};

export default BlogPost;