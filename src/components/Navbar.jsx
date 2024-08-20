import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="absolute w-full top-3" >
          <ul className="flex justify-around text-2xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
    
          </ul>
        </nav>
      )
    }

export default Navbar