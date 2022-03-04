import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between w-100" style={{"backgroundColor": "#e9ecef","top":0, "height":"75px"}}></nav>
        
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between w-100" style={{"backgroundColor": "#e9ecef", "position":"fixed", "top":0, "height":"75px"}}>
            <a className="navbar-brand mx-3 fs-3" style={{"color": "#162a53"}} href="/"><FaUserCircle /></a>

            <form className="d-flex form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 me-2" type="search" placeholder="Search"></input>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <button className="btn btn-outline-light my-2 me-2 my-sm-0" style={{"backgroundColor": "#162a53"}} type="submit">Search</button>
                </div>
            </form>
        </nav>
    </div>
  )
}

export default Navbar