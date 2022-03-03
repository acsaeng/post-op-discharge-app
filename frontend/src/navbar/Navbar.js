import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light justify-content-between mb-5" style={{"background-color": "#e9ecef"}}>
        <a class="navbar-brand mx-3 fs-3" style={{"color": "#162a53"}} href="/"><FaUserCircle /></a>

        <form class="d-flex form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 me-2" type="search" placeholder="Search"></input>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <button class="btn btn-outline-light my-2 me-2 my-sm-0" style={{"background-color": "#162a53"}} type="submit">Search</button>
            </div>
        </form>
    </nav>
  )
}

export default Navbar