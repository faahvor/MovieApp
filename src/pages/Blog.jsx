import { useState } from "react";
import data from "../assets/mockData.json";
import BlogCard from "../components/BlogCard";


const Blog = () => {
  const [blogPosts] = useState(data?.blogPosts);
  return (
    <div>
      <h1>Blog</h1>
      <div className="grid grid-cols-3 px-16 gap-10 justify-items-center py-10">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
};

export default Blog;