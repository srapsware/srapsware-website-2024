import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
import JsLoader from "@components/JsLoader";
import { useEffect } from "react";

import { useRouter } from 'next/router'


const toggleTheme = (e) =>  {
    if (localStorage.getItem('clim_theme') === 'theme-dark') {
        localStorage.setItem('clim_theme', 'theme-light');
        document.documentElement.className = 'theme-light';
    } else {
        localStorage.setItem('clim_theme', 'theme-dark');
        document.documentElement.className = 'theme-dark';
    }
}
export default function Header(props) {
    const router = useRouter();
    console.log(router);
    return (
      <>
      <header className="wrapper bg-soft-primary">
  <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
    <div className="container flex-lg-row flex-nowrap align-items-center">
      <div className="navbar-brand w-100">
        <a href="./index.html">
          <img
            src="/assets//img/logo-dark.png"
            srcSet="/assets//img/logo-dark@2x.png 2x"
            alt=""
          />
        </a>
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
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Demos
              </a>
              <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                <li className="mega-menu-content mega-menu-scroll">
                  <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                    <li className="col">
                      <a className="dropdown-item" href="./demo1.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi1.jpg"
                            srcSet="/assets//img/demos/mi1@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 1</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo2.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi2.jpg"
                            srcSet="/assets//img/demos/mi2@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 2</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo3.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi3.jpg"
                            srcSet="/assets//img/demos/mi3@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 3</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo4.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi4.jpg"
                            srcSet="/assets//img/demos/mi4@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 4</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo5.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi5.jpg"
                            srcSet="/assets//img/demos/mi5@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 5</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo6.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi6.jpg"
                            srcSet="/assets//img/demos/mi6@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 6</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo7.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi7.jpg"
                            srcSet="/assets//img/demos/mi7@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 7</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo8.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi8.jpg"
                            srcSet="/assets//img/demos/mi8@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 8</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo9.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi9.jpg"
                            srcSet="/assets//img/demos/mi9@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 9</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo10.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi10.jpg"
                            srcSet="/assets//img/demos/mi10@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 10</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo11.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi11.jpg"
                            srcSet="/assets//img/demos/mi11@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 11</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo12.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi12.jpg"
                            srcSet="/assets//img/demos/mi12@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 12</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo13.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi13.jpg"
                            srcSet="/assets//img/demos/mi13@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 13</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo14.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi14.jpg"
                            srcSet="/assets//img/demos/mi14@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 14</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo15.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi15.jpg"
                            srcSet="/assets//img/demos/mi15@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 15</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo16.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi16.jpg"
                            srcSet="/assets//img/demos/mi16@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 16</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo17.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi17.jpg"
                            srcSet="/assets//img/demos/mi17@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 17</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo18.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi18.jpg"
                            srcSet="/assets//img/demos/mi18@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 18</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo19.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi19.jpg"
                            srcSet="/assets//img/demos/mi19@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 19</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo20.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi20.jpg"
                            srcSet="/assets//img/demos/mi20@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 20</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo21.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi21.jpg"
                            srcSet="/assets//img/demos/mi21@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 21</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo22.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi22.jpg"
                            srcSet="/assets//img/demos/mi22@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 22</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo23.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi23.jpg"
                            srcSet="/assets//img/demos/mi23@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 23</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo24.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi24.jpg"
                            srcSet="/assets//img/demos/mi24@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 24</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo25.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi25.jpg"
                            srcSet="/assets//img/demos/mi25@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 25</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo26.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi26.jpg"
                            srcSet="/assets//img/demos/mi26@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 26</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo27.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi27.jpg"
                            srcSet="/assets//img/demos/mi27@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 27</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo28.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi28.jpg"
                            srcSet="/assets//img/demos/mi28@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 28</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo29.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi29.jpg"
                            srcSet="/assets//img/demos/mi29@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 29</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo30.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi30.jpg"
                            srcSet="/assets//img/demos/mi30@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 30</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo31.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi31.jpg"
                            srcSet="/assets//img/demos/mi31@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 31</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo32.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi32.jpg"
                            srcSet="/assets//img/demos/mi32@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 32</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo33.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi33.jpg"
                            srcSet="/assets//img/demos/mi33@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 33</span>
                      </a>
                    </li>
                    <li className="col">
                      <a className="dropdown-item" href="./demo34.html">
                        <figure className="rounded lift d-none d-lg-block">
                          <img
                            src="/assets//img/demos/mi34.jpg"
                            srcSet="/assets//img/demos/mi34@2x.jpg 2x"
                            alt=""
                          />
                        </figure>
                        <span className="d-lg-none">Demo 34</span>
                      </a>
                    </li>
                  </ul>
                  {/*/.row */}
                  <span className="d-none d-lg-flex">
                    <i className="uil uil-direction" />
                    <strong>Scroll to view more</strong>
                  </span>
                </li>
                {/*/.mega-menu-content*/}
              </ul>
              {/*/.dropdown-menu */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./services.html">
                        Services I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./services2.html">
                        Services II
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./about.html">
                        About I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./about2.html">
                        About II
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./shop.html">
                        Shop I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./shop2.html">
                        Shop II
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./shop-product.html">
                        Product Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./shop-cart.html">
                        Shopping Cart
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./shop-checkout.html">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Contact
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./contact.html">
                        Contact I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./contact2.html">
                        Contact II
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./contact3.html">
                        Contact III
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Career
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./career.html">
                        Job Listing I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./career2.html">
                        Job Listing II
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./career-job.html">
                        Job Description
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Utility
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./404.html">
                        404 Not Found
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./page-loader.html">
                        Page Loader
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./signin.html">
                        Sign In I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./signin2.html">
                        Sign In II
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./signup.html">
                        Sign Up I
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./signup2.html">
                        Sign Up II
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./terms.html">
                        Terms
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="./pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="./onepage.html">
                    One Page
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
                Projects
              </a>
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  <div>
                    <h6 className="dropdown-header">Project Pages</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a className="dropdown-item" href="./projects.html">
                          Projects I
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./projects2.html">
                          Projects II
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./projects3.html">
                          Projects III
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./projects4.html">
                          Projects IV
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.column */}
                  <div>
                    <h6 className="dropdown-header">Single Projects</h6>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="dropdown-item"
                          href="./single-project.html"
                        >
                          Single Project I
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./single-project2.html"
                        >
                          Single Project II
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./single-project3.html"
                        >
                          Single Project III
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./single-project4.html"
                        >
                          Single Project IV
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.column */}
                </div>
                {/* /auto-column */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a className="dropdown-item" href="./blog.html">
                    Blog without Sidebar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="./blog2.html">
                    Blog with Sidebar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="./blog3.html">
                    Blog with Left Sidebar
                  </a>
                </li>
                <li className="dropdown dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Blog Posts
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./blog-post.html">
                        Post without Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./blog-post2.html">
                        Post with Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./blog-post3.html">
                        Post with Left Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown dropdown-mega">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Blocks
              </a>
              <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                <li className="mega-menu-content">
                  <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/about.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block1.svg"
                            alt=""
                          />
                        </div>
                        <span>About</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/blog.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block2.svg"
                            alt=""
                          />
                        </div>
                        <span>Blog</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/call-to-action.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block3.svg"
                            alt=""
                          />
                        </div>
                        <span>Call to Action</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/clients.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block4.svg"
                            alt=""
                          />
                        </div>
                        <span>Clients</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/contact.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block5.svg"
                            alt=""
                          />
                        </div>
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/facts.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block6.svg"
                            alt=""
                          />
                        </div>
                        <span>Facts</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/faq.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block7.svg"
                            alt=""
                          />
                        </div>
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/features.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block8.svg"
                            alt=""
                          />
                        </div>
                        <span>Features</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/footer.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block9.svg"
                            alt=""
                          />
                        </div>
                        <span>Footer</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/hero.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block10.svg"
                            alt=""
                          />
                        </div>
                        <span>Hero</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/misc.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block17.svg"
                            alt=""
                          />
                        </div>
                        <span>Misc</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/navbar.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block11.svg"
                            alt=""
                          />
                        </div>
                        <span>Navbar</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/portfolio.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block12.svg"
                            alt=""
                          />
                        </div>
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/pricing.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block13.svg"
                            alt=""
                          />
                        </div>
                        <span>Pricing</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/process.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block14.svg"
                            alt=""
                          />
                        </div>
                        <span>Process</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/team.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block15.svg"
                            alt=""
                          />
                        </div>
                        <span>Team</span>
                      </a>
                    </li>
                    <li className="col">
                      <a
                        className="dropdown-item"
                        href="./docs/blocks/testimonials.html"
                      >
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                          <img
                            className="rounded-0"
                            src="/assets//img/demos/block16.svg"
                            alt=""
                          />
                        </div>
                        <span>Testimonials</span>
                      </a>
                    </li>
                  </ul>
                  {/*/.row */}
                </li>
                {/*/.mega-menu-content*/}
              </ul>
              {/*/.dropdown-menu */}
            </li>
            <li className="nav-item dropdown dropdown-mega">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Documentation
              </a>
              <ul className="dropdown-menu mega-menu">
                <li className="mega-menu-content">
                  <div className="row gx-0 gx-lg-3">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Usage</h6>
                      <ul className="list-unstyled cc-2 pb-lg-1">
                        <li>
                          <a className="dropdown-item" href="./docs/index.html">
                            Get Started
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="./docs/forms.html">
                            Forms
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="./docs/faq.html">
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./docs/changelog.html"
                          >
                            Changelog
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="./docs/credits.html"
                          >
                            Credits
                          </a>
                        </li>
                      </ul>
                      <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
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
          </ul>
          {/* /.navbar-nav */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <a href="mailto:first.last@email.com" className="link-inverse">
                info@email.com
              </a>
              <br /> 00 (123) 456 78 90 <br />
              <nav className="nav social social-white mt-4">
                <a href="#">
                  <i className="uil uil-twitter" />
                </a>
                <a href="#">
                  <i className="uil uil-facebook-f" />
                </a>
                <a href="#">
                  <i className="uil uil-dribbble" />
                </a>
                <a href="#">
                  <i className="uil uil-instagram" />
                </a>
                <a href="#">
                  <i className="uil uil-youtube" />
                </a>
              </nav>
              {/* /.social */}
            </div>
          </div>
          {/* /.offcanvas-footer */}
        </div>
        {/* /.offcanvas-body */}
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
                  De
                </a>
              </li>
              <li className="nav-item">
                <a className="dropdown-item" href="#">
                  Es
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
  <div
    className="offcanvas offcanvas-end text-inverse"
    id="offcanvas-info"
    data-bs-scroll="true"
  >
    <div className="offcanvas-header">
      <h3 className="text-white fs-30 mb-0">Sandbox</h3>
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body pb-6">
      <div className="widget mb-8">
        <p>
          Sandbox is a multipurpose HTML5 template with various layouts which
          will be a great solution for your business.
        </p>
      </div>
      {/* /.widget */}
      <div className="widget mb-8">
        <h4 className="widget-title text-white mb-3">Contact Info</h4>
        <address>
          {" "}
          Moonshine St. 14/05 <br /> Light City, London{" "}
        </address>
        <a href="mailto:first.last@email.com">info@email.com</a>
        <br /> 00 (123) 456 78 90
      </div>
      {/* /.widget */}
      <div className="widget mb-8">
        <h4 className="widget-title text-white mb-3">Learn More</h4>
        <ul className="list-unstyled">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* /.widget */}
      <div className="widget">
        <h4 className="widget-title text-white mb-3">Follow Us</h4>
        <nav className="nav social social-white">
          <a href="#">
            <i className="uil uil-twitter" />
          </a>
          <a href="#">
            <i className="uil uil-facebook-f" />
          </a>
          <a href="#">
            <i className="uil uil-dribbble" />
          </a>
          <a href="#">
            <i className="uil uil-instagram" />
          </a>
          <a href="#">
            <i className="uil uil-youtube" />
          </a>
        </nav>
        {/* /.social */}
      </div>
      {/* /.widget */}
    </div>
    {/* /.offcanvas-body */}
  </div>
  {/* /.offcanvas */}
</header>

      </>
  )
}
