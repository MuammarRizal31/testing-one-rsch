import NavItemLink from "./navbar-component/NavItemLink";

const NavbarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Logo
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavItemLink path={"/home"} text="Home" />
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <NavItemLink path={"/company"} text="Company" />
                  </li>
                  <li>
                    <NavItemLink path={"/history"} text="History" />
                  </li>
                  <li>
                    <NavItemLink path={"/business-unit"} text="Business Unit" />
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavItemLink path={"/fondation"} text="Fondation" />
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <NavItemLink path={"/product-1"} text="Product 1" />
                  </li>
                  <li>
                    <NavItemLink path={"/product-2"} text="Product 2" />
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavItemLink path={"/product-3"} text="Product 3" />
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  News&Latest
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <NavItemLink path={"/news"} text="News" />
                  </li>
                  <li>
                    <NavItemLink path={"/latest"} text="Latest" />
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavItemLink path={"/csr"} text="CSR" />
              </li>
              <li className="nav-item">
                <NavItemLink path={"/carrer"} text="Carrer" />
              </li>
              <li className="nav-item">
                <NavItemLink path={"/contact-us"} text="Contact Us" />
              </li>
              <li className="nav-item">
                <NavItemLink path={"/faq"} text="FAQ" />
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
