import { useContext, useState } from "react";
import data from "../assets/Data.json";
import BlogCard from "../components/BlogCard";
import { Outlet } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

const Blog = () => {
  const [blogPosts] = useState(data?.blogPosts);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <h1>Blog</h1>
      <div className=" grid grid-cols-3 px-16 gap-10 justify-items-center py-10">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
