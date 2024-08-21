import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Home = () => {
  const {darkMode,setDarkMode}=useContext(ThemeContext)
  return (
    <div className={`${darkMode ? "bg-yellow-100 text-black":"bg-yellow-500 text-green-600"} h-screen pt-20`}>
    <h1 className="pl-10">Home</h1>
    <div className="px-20 pl-[30rem]">
      <p className="pr-5 leading-relaxed text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        libero ipsa rem quod nisi exercitationem similique, iste
        necessitatibus, delectus laudantium omnis maxime repellendus illum
        iusto consectetur architecto, nulla commodi pariatur aut! Mollitia
        voluptate animi commodi, corrupti ducimus consequuntur, molestias
        adipisci sint nulla iusto dolorem saepe, eum quam repudiandae?
        Similique, odit?
      </p>
    </div>
  </div>
  );
};

export default Home;
