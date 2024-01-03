import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Js from "@components/Js";

export default function Home() {
  return (
    <>
      <Meta />
      <Head>
        <title>Terms and conditions | Ashok Seeds and Plants</title>
        <meta
          name="description"
          content="We reuest our users/customers to read our Terms & Conditions before work wth us. Thank you!"
        />
      </Head>
      <div className="content-wrapper">
      <Header />
  {/* /header */}
  <section className="wrapper bg-gradient-primary">
    <div className="container pt-10 pt-md-14 pb-8 text-center">
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-7">
          <figure>
            <img
              className="w-auto"
              src="./assets/img/illustrations/i2.png"
              srcSet="./assets/img/illustrations/i2@2x.png 2x"
              alt=""
            />
          </figure>
        </div>
        {/* /column */}
        <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
          <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">
            Grow Your Business with Our Solutions.
          </h1>
          <p className="lead fs-lg mb-7">
            We help our clients to increase their website traffic, rankings and
            visibility in search results.
          </p>
          <span>
            <a className="btn btn-primary rounded-pill me-2">Try It For Free</a>
          </span>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-light">
    <div className="container pt-14 pt-md-16">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="fs-16 text-uppercase text-muted mb-3">What We Do?</h2>
          <h3 className="display-4 mb-10 px-xl-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="position-relative">
        <div
          className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
          data-rellax-speed={1}
          style={{ bottom: "-0.5rem", right: "-2.2rem", zIndex: 0 }}
        />
        <div
          className="shape bg-dot primary rellax w-16 h-17"
          data-rellax-speed={1}
          style={{ top: "-0.5rem", left: "-2.5rem", zIndex: 0 }}
        />
        <div className="row gx-md-5 gy-5 text-center">
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img
                  src="./assets/img/icons/lineal/search-2.svg"
                  className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
                  alt=""
                />
                <h4>SEO Services</h4>
                <p className="mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </p>
                <a href="#" className="more hover link-yellow">
                  Learn More
                </a>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img
                  src="./assets/img/icons/lineal/browser.svg"
                  className="svg-inject icon-svg icon-svg-md text-red mb-3"
                  alt=""
                />
                <h4>Web Design</h4>
                <p className="mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </p>
                <a href="#" className="more hover link-red">
                  Learn More
                </a>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img
                  src="./assets/img/icons/lineal/chat-2.svg"
                  className="svg-inject icon-svg icon-svg-md text-green mb-3"
                  alt=""
                />
                <h4>Social Engagement</h4>
                <p className="mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </p>
                <a href="#" className="more hover link-green">
                  Learn More
                </a>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img
                  src="./assets/img/icons/lineal/megaphone.svg"
                  className="svg-inject icon-svg icon-svg-md text-blue mb-3"
                  alt=""
                />
                <h4>Content Marketing</h4>
                <p className="mb-2">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </p>
                <a href="#" className="more hover link-blue">
                  Learn More
                </a>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.position-relative */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-gradient-reverse-primary">
    <div className="container py-16 py-md-18">
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 align-items-center">
        <div className="col-lg-7 order-lg-2">
          <figure>
            <img
              className="w-auto"
              src="./assets/img/illustrations/i3.png"
              srcSet="./assets/img/illustrations/i3@2x.png 2x"
              alt=""
            />
          </figure>
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Analyze Now</h2>
          <h3 className="display-4 mb-5">
            Wonder how much faster your website can go? Easily check your SEO
            Score now.
          </h3>
          <p className="mb-7">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div className="row">
            <div className="col-lg-9">
              <form action="#">
                <div className="form-floating input-group">
                  <input
                    type="url"
                    className="form-control"
                    placeholder="Enter Website URL"
                    id="seo-check"
                  />
                  <label htmlFor="seo-check">Enter Website URL</label>
                  <button className="btn btn-primary" type="button">
                    Check
                  </button>
                </div>
              </form>
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-light angled upper-start lower-start">
    <div className="container py-14 pt-md-17 pb-md-15">
      <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="card shadow-lg me-lg-6">
            <div className="card-body p-6">
              <div className="d-flex flex-row">
                <div>
                  <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                    <span className="number">01</span>
                  </span>
                </div>
                <div>
                  <h4 className="mb-1">Collect Ideas</h4>
                  <p className="mb-0">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
          <div className="card shadow-lg ms-lg-13 mt-6">
            <div className="card-body p-6">
              <div className="d-flex flex-row">
                <div>
                  <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                    <span className="number">02</span>
                  </span>
                </div>
                <div>
                  <h4 className="mb-1">Data Analysis</h4>
                  <p className="mb-0">
                    Vivamus sagittis lacus vel augue laoreet.
                  </p>
                </div>
              </div>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
          <div className="card shadow-lg mx-lg-6 mt-6">
            <div className="card-body p-6">
              <div className="d-flex flex-row">
                <div>
                  <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                    <span className="number">03</span>
                  </span>
                </div>
                <div>
                  <h4 className="mb-1">Finalize Product</h4>
                  <p className="mb-0">
                    Cras mattis consectetur purus sit amet.
                  </p>
                </div>
              </div>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
        <div className="col-lg-6">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2>
          <h3 className="display-4 mb-5">
            Here are 3 working steps to organize our business projects.
          </h3>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>
          <p className="mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <a href="#" className="btn btn-primary rounded-pill mb-0">
            Learn More
          </a>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center">
        <div className="col-lg-7">
          <figure>
            <img
              className="w-auto"
              src="./assets/img/illustrations/i6.png"
              srcSet="./assets/img/illustrations/i6@2x.png 2x"
              alt=""
            />
          </figure>
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h2 className="fs-16 text-uppercase text-muted mb-3">
            Why Choose Us?
          </h2>
          <h3 className="display-4 mb-7">
            We bring solutions to make life easier for our clients.
          </h3>
          <div className="accordion accordion-wrapper" id="accordionExample">
            <div className="card plain accordion-item">
              <div className="card-header" id="headingOne">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                  Professional Design{" "}
                </button>
              </div>
              {/*/.card-header */}
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cras mattis consectetur purus sit amet fermentum. Praesent
                    commodo cursus magna, vel.
                  </p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.accordion-collapse */}
            </div>
            {/*/.accordion-item */}
            <div className="card plain accordion-item">
              <div className="card-header" id="headingTwo">
                <button
                  className="collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {" "}
                  Top-Notch Support{" "}
                </button>
              </div>
              {/*/.card-header */}
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cras mattis consectetur purus sit amet fermentum. Praesent
                    commodo cursus magna, vel.
                  </p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.accordion-collapse */}
            </div>
            {/*/.accordion-item */}
            <div className="card plain accordion-item">
              <div className="card-header" id="headingThree">
                <button
                  className="collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {" "}
                  Header and Slider Options{" "}
                </button>
              </div>
              {/*/.card-header */}
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="card-body">
                  <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cras mattis consectetur purus sit amet fermentum. Praesent
                    commodo cursus magna, vel.
                  </p>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.accordion-collapse */}
            </div>
            {/*/.accordion-item */}
          </div>
          {/*/.accordion */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-gradient-primary">
    <div className="container py-14 pt-md-16 pb-md-18">
      <div className="position-relative mt-8 mt-lg-n23 mt-xl-n25">
        <div className="row text-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Our Team</h2>
            <h3 className="display-4 mb-10 px-md-13 px-lg-4 px-xl-0">
              Think unique and be innovative. Make a difference with Sandbox.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="position-relative">
          <div
            className="shape bg-dot blue rellax w-16 h-17"
            data-rellax-speed={1}
            style={{ bottom: "0.5rem", right: "-1.7rem", zIndex: 0 }}
          />
          <div
            className="shape rounded-circle bg-line red rellax w-16 h-16"
            data-rellax-speed={1}
            style={{ top: "0.5rem", left: "-1.7rem", zIndex: 0 }}
          />
          <div className="row grid-view gy-6 gy-xl-0">
            <div className="col-md-6 col-xl-3">
              <div className="card shadow-lg">
                <div className="card-body">
                  <img
                    className="rounded-circle w-15 mb-4"
                    src="./assets/img/avatars/te1.jpg"
                    srcSet="./assets/img/avatars/te1@2x.jpg 2x"
                    alt=""
                  />
                  <h4 className="mb-1">Coriss Ambady</h4>
                  <div className="meta mb-2">Financial Analyst</div>
                  <p className="mb-2">
                    Fermentum massa justo sit amet risus morbi leo.
                  </p>
                  <nav className="nav social mb-0">
                    <a href="#">
                      <i className="uil uil-twitter" />
                    </a>
                    <a href="#">
                      <i className="uil uil-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="uil uil-dribbble" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-xl-3">
              <div className="card shadow-lg">
                <div className="card-body">
                  <img
                    className="rounded-circle w-15 mb-4"
                    src="./assets/img/avatars/te2.jpg"
                    srcSet="./assets/img/avatars/te2@2x.jpg 2x"
                    alt=""
                  />
                  <h4 className="mb-1">Cory Zamora</h4>
                  <div className="meta mb-2">Marketing Specialist</div>
                  <p className="mb-2">
                    Fermentum massa justo sit amet risus morbi leo.
                  </p>
                  <nav className="nav social mb-0">
                    <a href="#">
                      <i className="uil uil-twitter" />
                    </a>
                    <a href="#">
                      <i className="uil uil-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="uil uil-dribbble" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-xl-3">
              <div className="card shadow-lg">
                <div className="card-body">
                  <img
                    className="rounded-circle w-15 mb-4"
                    src="./assets/img/avatars/te3.jpg"
                    srcSet="./assets/img/avatars/te3@2x.jpg 2x"
                    alt=""
                  />
                  <h4 className="mb-1">Nikolas Brooten</h4>
                  <div className="meta mb-2">Sales Manager</div>
                  <p className="mb-2">
                    Fermentum massa justo sit amet risus morbi leo.
                  </p>
                  <nav className="nav social mb-0">
                    <a href="#">
                      <i className="uil uil-twitter" />
                    </a>
                    <a href="#">
                      <i className="uil uil-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="uil uil-dribbble" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-xl-3">
              <div className="card shadow-lg">
                <div className="card-body">
                  <img
                    className="rounded-circle w-15 mb-4"
                    src="./assets/img/avatars/te4.jpg"
                    srcSet="./assets/img/avatars/te4@2x.jpg 2x"
                    alt=""
                  />
                  <h4 className="mb-1">Jackie Sanders</h4>
                  <div className="meta mb-2">Investment Planner</div>
                  <p className="mb-2">
                    Fermentum massa justo sit amet risus morbi leo.
                  </p>
                  <nav className="nav social mb-0">
                    <a href="#">
                      <i className="uil uil-twitter" />
                    </a>
                    <a href="#">
                      <i className="uil uil-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="uil uil-dribbble" />
                    </a>
                  </nav>
                  {/* /.social */}
                </div>
                {/*/.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.position-relative */}
      </div>
      {/* /div */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-light">
    <div className="container">
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-7 order-lg-2">
          <figure>
            <img
              className="w-auto"
              src="./assets/img/illustrations/i8.png"
              srcSet="./assets/img/illustrations/i8@2x.png 2x"
              alt=""
            />
          </figure>
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h2 className="fs-16 text-uppercase text-muted mb-3">
            Our Solutions
          </h2>
          <h3 className="display-4 mb-5">
            We make your spending stress-free for you to have the perfect
            control.
          </h3>
          <p className="mb-6">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus.
          </p>
          <div className="row gy-3">
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Aenean quam ornare. Curabitur blandit.</span>
                </li>
                <li className="mt-3">
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Nullam quis risus eget urna mollis ornare.</span>
                </li>
              </ul>
            </div>
            {/*/column */}
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Etiam porta euismod malesuada mollis.</span>
                </li>
                <li className="mt-3">
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Vivamus sagittis lacus vel augue rutrum.</span>
                </li>
              </ul>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-gradient-reverse-primary">
    <div className="container py-14 py-md-18">
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-7">
          <div className="row gx-md-5 gy-5">
            <div className="col-md-6 col-xl-5 align-self-end">
              <div className="card shadow-lg">
                <div className="card-body">
                  <blockquote className="icon mb-0">
                    <p>
                      “Cum sociis natoque penatibus et magnis dis parturient
                      montes.”
                    </p>
                    <div className="blockquote-details">
                      <div className="info p-0">
                        <h5 className="mb-1">Coriss Ambady</h5>
                        <p className="mb-0">Financial Analyst</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="col-md-6 align-self-end">
              <div className="card shadow-lg">
                <div className="card-body">
                  <blockquote className="icon mb-0">
                    <p>
                      “Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      dolor auctor. Vestibulum id ligula porta felis euismod.”
                    </p>
                    <div className="blockquote-details">
                      <div className="info p-0">
                        <h5 className="mb-1">Cory Zamora</h5>
                        <p className="mb-0">Marketing Specialist</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-xl-5 offset-xl-1">
              <div className="card shadow-lg">
                <div className="card-body">
                  <blockquote className="icon mb-0">
                    <p>
                      “Donec id elit non porta gravida at eget metus. Duis
                      mollis est luctus commodo nisi erat.”
                    </p>
                    <div className="blockquote-details">
                      <div className="info p-0">
                        <h5 className="mb-1">Barclay Widerski</h5>
                        <p className="mb-0">Sales Specialist</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="col-md-6 align-self-start">
              <div className="card shadow-lg">
                <div className="card-body">
                  <blockquote className="icon mb-0">
                    <p>
                      “Nisi erat porttitor ligula, eget lacinia odio sem nec
                      elit. Aenean eu leo pellentesque.”
                    </p>
                    <div className="blockquote-details">
                      <div className="info p-0">
                        <h5 className="mb-1">Jackie Sanders</h5>
                        <p className="mb-0">Investment Planner</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">
            Our Community
          </h2>
          <h3 className="display-4 mb-5">
            Don't take our word for it. See what customers are saying about us.
          </h3>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit
            libero, a pharetra augue. Maecenas faucibus mollis interdum.
            Vestibulum id ligula porta felis euismod.
          </p>
          <a href="#" className="btn btn-primary rounded-pill mt-3">
            All Testimonials
          </a>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper bg-light angled upper-end lower-end">
    <div className="container py-14 pt-md-14 pb-md-18">
      <div className="row gy-6 mb-14 mb-md-18">
        <div className="col-lg-4">
          <h2 className="fs-16 text-uppercase text-muted mt-lg-18 mb-3">
            Our Pricing
          </h2>
          <h3 className="display-4 mb-3">We offer great and premium prices.</h3>
          <p>
            Enjoy a{" "}
            <a href="#" className="hover">
              free 30-day trial
            </a>{" "}
            and experience the full service. No credit card required!
          </p>
          <a href="#" className="btn btn-primary rounded-pill mt-2">
            See All Prices
          </a>
        </div>
        {/*/column */}
        <div className="col-lg-7 offset-lg-1 pricing-wrapper">
          <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
            <p className="mb-0 pe-3">Monthly</p>
            <div className="pricing-switchers">
              <div className="pricing-switcher pricing-switcher-active" />
              <div className="pricing-switcher" />
              <div className="switcher-button bg-primary" />
            </div>
            <p className="mb-0 ps-3">
              Yearly <span className="text-red">(Save 30%)</span>
            </p>
          </div>
          <div className="row gy-6 position-relative mt-5">
            <div
              className="shape bg-dot red rellax w-16 h-18"
              data-rellax-speed={1}
              style={{ bottom: "-0.5rem", right: "-1.6rem" }}
            />
            <div className="col-md-6">
              <div className="pricing card shadow-lg">
                <div className="card-body pb-12">
                  <div className="prices text-dark">
                    <div className="price price-show justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">19</span>{" "}
                      <span className="price-duration">mo</span>
                    </div>
                    <div className="price price-hide price-hidden justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">199</span>{" "}
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  {/*/.prices */}
                  <h4 className="card-title mt-2">Premium Plan</h4>
                  <ul className="icon-list bullet-primary mt-7 mb-8">
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        <strong>5</strong> Projects{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        <strong>100K</strong> API Access{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        <strong>200MB</strong> Storage{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        {" "}
                        Weekly <strong>Reports</strong>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        {" "}
                        7/24 <strong>Support</strong>
                      </span>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary rounded-pill">
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="col-md-6 popular">
              <div className="pricing card shadow-lg">
                <div className="card-body pb-12">
                  <div className="prices text-dark">
                    <div className="price price-show justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">49</span>{" "}
                      <span className="price-duration">mo</span>
                    </div>
                    <div className="price price-hide price-hidden justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">499</span>{" "}
                      <span className="price-duration">yr</span>
                    </div>
                  </div>
                  {/*/.prices */}
                  <h4 className="card-title mt-2">Corporate Plan</h4>
                  <ul className="icon-list bullet-primary mt-7 mb-8">
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        <strong>20</strong> Projects{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        <strong>300K</strong> API Access{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        <strong>500MB</strong> Storage{" "}
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        {" "}
                        Weekly <strong>Reports</strong>
                      </span>
                    </li>
                    <li>
                      <i className="uil uil-check fs-21" />
                      <span>
                        {" "}
                        7/24 <strong>Support</strong>
                      </span>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary rounded-pill">
                    Choose Plan
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
        <div className="col-lg-7">
          <figure>
            <img
              className="w-auto"
              src="./assets/img/illustrations/i5.png"
              srcSet="./assets/img/illustrations/i5@2x.png 2x"
              alt=""
            />
          </figure>
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Let’s Talk</h2>
          <h3 className="display-4 mb-3">
            Let's make something great together. We are trusted by over 5000+
            clients.
          </h3>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          </p>
          <a href="#" className="btn btn-primary rounded-pill mt-2">
            Join Us
          </a>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
      <div className="px-lg-5">
        <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
          <div className="col-4 col-md-2">
            <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <img src="./assets/img/brands/c1.png" alt="" />
            </figure>
          </div>
          {/*/column */}
          <div className="col-4 col-md-2">
            <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <img src="./assets/img/brands/c2.png" alt="" />
            </figure>
          </div>
          {/*/column */}
          <div className="col-4 col-md-2">
            <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <img src="./assets/img/brands/c3.png" alt="" />
            </figure>
          </div>
          {/*/column */}
          <div className="col-4 col-md-2">
            <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <img src="./assets/img/brands/c4.png" alt="" />
            </figure>
          </div>
          {/*/column */}
          <div className="col-4 col-md-2">
            <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <img src="./assets/img/brands/c5.png" alt="" />
            </figure>
          </div>
          {/*/column */}
          <div className="col-4 col-md-2">
            <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
              <img src="./assets/img/brands/c6.png" alt="" />
            </figure>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /div */}
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
</div>

      
        


        <Footer />
      
        <Js />
    </>
  );
}