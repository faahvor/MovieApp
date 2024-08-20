import { useState } from "react";
import data from "../assets/Data.json";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [blogPosts] = useState(data.blogPosts);

  return (
    <div>
      <h1>Blog</h1>
      <div className="grid grid-cols-3 justify-items-center gap-10">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
