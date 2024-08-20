/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { useParams } from "react-router-dom";
const BlogPost = () => {
  const { slug } = useParams();
  const [blogPosts] = useState(data.blogPosts);
  return <div className="bg-red-700">BlogPost</div>;
};

export default BlogPost;
