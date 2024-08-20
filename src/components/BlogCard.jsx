import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({ post }) => {
  console.log(post);
  return (
    <div className="flex flex-col gap-2 justify-between ">
      <img className="h-60 object-cover" src={post.image} alt="" />
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-lg">{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <Link to={`${post.id}`}>
      <button className="w-fit px-3 py-1 text-white bg-blue-400 rounded-lg">Read More</button>
      </Link>
    </div>
  );
};

export default BlogCard;
