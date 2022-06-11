import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ title }) {
  return (
    // Inclue classes from Tailwind css and daisy UI for the navbar (nice!!)
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
            <FaGithub className="inline pr-2 text-3xl"/>
            <Link to="/" className="text-lg font-bold align-middle">
                {title}
            </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                    Home
                </Link>
                <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                    About
                </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

// Set default props with PropTypes
NavBar.defaultProps = {
  title: "GitHub Finder",
};

//Set default propTypes

NavBar.propTypes = {
  title: PropTypes.string,
};

export default NavBar;
