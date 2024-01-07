import Link from "next/link";
import Image from 'next/image'
import { useTheme } from 'next-themes'
import SocialLinks from "@components/SocialLinks";
import LanguageSwitcher from "@components/LanguageSwitcher";
import JsLoader from "@components/JsLoader";
import { useEffect } from "react";

import { useRouter } from "next/router";


export default function Header(props) {
  const router = useRouter();
  //console.log(router);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header className="wrapper bg-soft-primary fixed-top">
        <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
          <div className="container flex-lg-row flex-nowrap align-items-center">
            <div className="navbar-brand w-100">
              <Link href={'/'}>
                <img
                  src="/assets/img/logo.png"
                  srcSet="/assets/img/logo@2x.png 2x"
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
                          <div className="col-lg-3">
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
                                  <i className="fa-brands fa-magento"></i> Magento Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fas fa-shopping-basket"></i> Woocommerce Website
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-brands fa-wordpress"></i> WordPress Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-brands fa-joomla"></i> Joomla Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-regular fa-laptop-mobile"></i> Responsive Website Design
                                </a>
                              </li>
                            </ul>
                          
                          </div>
                          <div className="col-lg-3">
                            <h6 className="dropdown-header">Mobile App</h6>
                            <ul className="list-unstyled cc-1 pb-lg-1">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                ><i className="fa-brands fa-android"></i> Android App Development</a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-brands fa-app-store-ios"></i> iOS App Development
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-solid fa-mobile-screen"></i> Mobile site design
                                </a>
                              </li>
                              
                            </ul>
                            <h6 className="dropdown-header pt-5">Browser Extension</h6>
                            <ul className="list-unstyled cc-1 pb-lg-1">
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                ><i className="fa-brands fa-chrome"></i> Google Chrome Extension</a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                >
                                  <i className="fa-brands fa-firefox-browser"></i> Mozilla Firefox Extension
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <h6 className="dropdown-header">Other Services</h6>
                            <ul className="list-unstyled cc-2">
                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-rectangles-mixed"></i> Hosting billing and support</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-solid fa-house-laptop"></i> Remote support/maintenance</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-solid fa-server"></i> Server installation/monitoring</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-solid fa-file-export"></i> Data extraction Services</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-solid fa-database"></i> Database management & uses</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-duotone fa-server"></i> Apache and my SQL issues</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-brands fa-cpanel"></i> Hosting panel installation</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-solid fa-warehouse"></i> Hosting Automation</a></li>
															<li><a className="dropdown-item" href="/services/fix-your-hacked-website-immediately/"><i className="fa-duotone fa-user-secret"></i> Fix Your hacked Website</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa-solid fa-envelopes"></i> Email marketing</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa-solid fa-folder-magnifying-glass"></i> Search Engine Optimization</a></li>
															<li><a className="dropdown-item" href="#"><i className="fa-solid fa-icons"></i> Social Media Optimization</a></li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </li>
                      
                    </ul>
                    
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
                        <i className="fa-duotone fa-microchip"></i> Our Process
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        <i className="fa-duotone fa-buildings"></i> About Our Company
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        <i className="fa-duotone fa-heart-pulse"></i> What Client Say
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
                        <i className="fa-duotone fa-newspaper"></i> Blog and News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        <i className="fa-duotone fa-indian-rupee-sign"></i> Make Payment
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                        <i className="fa-duotone fa-messages-question"></i> Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                
              </div>
              
            </div>
          
            <div className="navbar-other w-100 d-flex ms-auto">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item dropdown language-select text-uppercase">

                  <LanguageSwitcher />
                  
                </li>
                <li className="nav-item">
                <button className="btn btn-link" data-hide-on-theme='light' onClick={() => setTheme('light')}><i className="fa-duotone fa-1-5-x fa-sun-bright"></i></button>
                <button className="btn btn-link" data-hide-on-theme='dark' onClick={() => setTheme('dark')}><i className="fa-duotone fa-1-5-x fa-moon"></i></button>
                </li>
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
              
            </div>
           
          </div>
          
        </nav>
        
        
       
      </header>
    </>
  );
}
