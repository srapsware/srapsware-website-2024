import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import JsLoader from "@components/JsLoader";
import { useEffect } from "react";

import { useRouter } from "next/router";

const toggleTheme = (e) => {
  if (localStorage.getItem("clim_theme") === "theme-dark") {
    localStorage.setItem("clim_theme", "theme-light");
    document.documentElement.className = "theme-light";
  } else {
    localStorage.setItem("clim_theme", "theme-dark");
    document.documentElement.className = "theme-dark";
  }
};
export default function Header(props) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <header className="wrapper bg-soft-primary">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
          <div className="container flex-lg-row flex-nowrap align-items-center">
            <div className="navbar-brand w-100">
              <Link href={'/'}>
                <img
                  src="/assets/img/logo-dark.png"
                  srcSet="/assets/img/logo-dark@2x.png 2x"
                  alt=""
                />
              </Link>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown dropdown-mega">
                    <Link href={'/'} className="nav-link" >
                      Home
                    
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu mega-menu">
                      <li className="mega-menu-content">
                        <div className="row gx-0 gx-lg-3">
                          <div className="col-lg-4">
                            <h6 className="dropdown-header">Web developments</h6>
                            <ul className="list-unstyled cc-1 pb-lg-1">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-solid fa-cart-shopping"></i> E commerce Website Design
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i class="fa-brands fa-magento"></i> Magento Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i class="fas fa-shopping-basket"></i> Woocommerce Website
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i class="fa-brands fa-wordpress"></i> WordPress Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i class="fa-brands fa-joomla"></i> Joomla Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i class="fa-brands fa-joomla"></i> Joomla Development
                                </a>
                              </li>
                            </ul>
                            <h6 className="dropdown-header mt-lg-6">
                              Styleguide
                            </h6>
                            <ul className="list-unstyled cc-2">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/colors.html"
                                >
                                  Colors
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/fonts.html"
                                >
                                  Fonts
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/icons-svg.html"
                                >
                                  SVG Icons
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/icons-font.html"
                                >
                                  Font Icons
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/illustrations.html"
                                >
                                  Illustrations
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/backgrounds.html"
                                >
                                  Backgrounds
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/styleguide/misc.html"
                                >
                                  Misc
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/*/column */}
                          <div className="col-lg-8">
                            <h6 className="dropdown-header">Elements</h6>
                            <ul className="list-unstyled cc-3">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/accordion.html"
                                >
                                  Accordion
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/alerts.html"
                                >
                                  Alerts
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/animations.html"
                                >
                                  Animations
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/avatars.html"
                                >
                                  Avatars
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/background.html"
                                >
                                  Background
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/badges.html"
                                >
                                  Badges
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/buttons.html"
                                >
                                  Buttons
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/card.html"
                                >
                                  Card
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/carousel.html"
                                >
                                  Carousel
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/dividers.html"
                                >
                                  Dividers
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/form-elements.html"
                                >
                                  Form Elements
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/image-hover.html"
                                >
                                  Image Hover
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/image-mask.html"
                                >
                                  Image Mask
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/lightbox.html"
                                >
                                  Lightbox
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/player.html"
                                >
                                  Media Player
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/modal.html"
                                >
                                  Modal
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/pagination.html"
                                >
                                  Pagination
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/progressbar.html"
                                >
                                  Progressbar
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/shadows.html"
                                >
                                  Shadows
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/shapes.html"
                                >
                                  Shapes
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/tables.html"
                                >
                                  Tables
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/tabs.html"
                                >
                                  Tabs
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/text-animations.html"
                                >
                                  Text Animations
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/text-highlight.html"
                                >
                                  Text Highlight
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/tiles.html"
                                >
                                  Tiles
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/tooltips-popovers.html"
                                >
                                  Tooltips &amp; Popovers
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="./docs/elements/typography.html"
                                >
                                  Typography
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/*/column */}
                        </div>
                        {/*/.row */}
                      </li>
                      {/*/.mega-menu-content*/}
                    </ul>
                    {/*/.dropdown-menu */}
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <a className="nav-link" href="/" >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Company
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        Our Process
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        About Our Company
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        What Client Say
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Support
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        Blog and News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        Make Payment
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                
              </div>
              
            </div>
            {/* /.navbar-collapse */}
            <div className="navbar-other w-100 d-flex ms-auto">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item dropdown language-select text-uppercase">
                  <a
                    className="nav-link dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    En
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="#">
                        En
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="#">
                        Fr
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="#">
                        Hi
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-info"
                  >
                    <i className="uil uil-info-circle" />
                  </a>
                </li>
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.container */}
        </nav>
        {/* /.navbar */}
        
        {/* /.offcanvas */}
      </header>
    </>
  );
}
