import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <h1>This is Header</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/comments">Comments</NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
