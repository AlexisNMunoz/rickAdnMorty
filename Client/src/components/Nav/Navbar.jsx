import "./navbar.css"

import SearchBar from "../Search/SearchBar"
import { NavLink } from "react-router-dom"

function Navbar({ onSearch, pathname, logOut }) {
    return (
        <>
            {
                pathname !== "/"
                    ? <div className="navbar_container">
                        <div className="navbar_link">
                            <NavLink className="links" to="/home">Home</NavLink>
                            <NavLink className="links" to='/favorites'>Favorites</NavLink>
                            <NavLink className="links" to="/about">About</NavLink>
                            <button style={{ cursor: "pointer" }} onClick={logOut}>Log out</button>
                        </div>
                        <SearchBar onSearch={onSearch} />
                    </div>
                    : null
            }
        </>
    )
}

export default Navbar