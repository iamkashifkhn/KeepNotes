import React from "react";



const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
        <h2 class="logo d-flex">
						<span class="color">K.</span>
						<span> Usman </span>
					</h2>
          <ul class="nav-list d-flex">
						<li class="nav-item">
							<a href="#header" class="nav-link scroll-link"> Home </a>
						</li>
						<li class="nav-item">
							<a href="#about" class="nav-link scroll-link"> About </a>
						</li>
						<li class="nav-item">
							<a href="#Services" class="nav-link scroll-link"> Services</a>
						</li>
						<li class="nav-item">
							<a href="#blog" class="nav-link scroll-link"> Blog </a>
						</li>
						<li class="nav-item">
							<a href="#contact" class="nav-link scroll-link"> Contact </a>
						</li>
            </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
