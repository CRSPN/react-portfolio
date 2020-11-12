import React from "react"

function Navbar (){
    return(
        <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">C.Allred</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">bio</a></li>
            <li><a href="assets/html/resume.html">Resume</a></li>
            <li><a href="assets/html/art.html">Art</a></li>
            <li><a href="#"></a></li>
          </ul>
    
          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    
    )

}
export default Navbar