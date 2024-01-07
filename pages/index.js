import Head from "next/head";

import Meta from "@components/Meta";
import Header from "@components/Header";
import PortfolioSlider from "@components/PortfolioSlider";
import Footer from "@components/Footer";
import Js from "@components/Js";

import { fetchAPI } from "../lib/api";
const Home = ({ portfolios, testimonials, clients, posts }) => {
  return (
    <>
      <Meta />
      <Head>
        <title>Home | Srapsware</title>
        <meta
          name="description"
          content="We reuest our users/customers to read our Terms & Conditions before work wth us. Thank you!"
        />
      </Head>
      <div className="content-wrapper">
        <Header />
        <section className="wrapper bg-gradient-primary">
          <div className="container pt-10 pt-md-14 pb-8 text-center">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7">
                <figure>
                  <img
                    className="w-auto"
                    src="/assets/img/illustrations/i2.png"
                    srcSet="/assets/img/illustrations/i2@2x.png 2x"
                    alt=""
                  />
                </figure>
              </div>

              <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
                <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">
                  Boost your business with our solutions.
                </h1>
                <p className="lead fs-lg mb-7">
                  Our software solutions are designed to meet the demands of
                  demanding business goals in highly complex environments.
                </p>
                <span>
                  <a className="btn btn-primary rounded-pill me-2">
                    Try It For Free
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="overflow-hidden">
            <div className="container py-14 py-md-16">
              <div className="row">
                <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
                  <h2 className="fs-16 text-uppercase text-primary mb-3">
                  OUR CUSTOMERS AS WELL AS OUR WORK
                  </h2>
                  <h3 className="display-3 mb-10">
                  Turning ideas into beautiful things is something we love to do.
                  </h3>
                </div>
              </div>
              
                
                  
                    <PortfolioSlider portfolios={portfolios} />
                  
                
              
            </div>
          </div>
        </section>
      
  <section className="wrapper bg-dark wrapper-border">
    <div className="container py-14 py-md-16">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3">
            OUR FIELD OF EXPERTISE
          </h2>
          <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
            Let's look at what we bake with codes and what we serve
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <ul className="nav nav-tabs nav-tabs-bg d-flex justify-content-between nav-justified flex-lg-row flex-column">
        <li className="nav-item">
          {" "}
          <a
            className="nav-link d-flex flex-row active"
            data-bs-toggle="tab"
            href="#tab2-1"
          >
            <div>
              <img
                src="/assets/img/icons/web-development.png"
                className="text-yellow me-4"
                alt="Web Development"
              />
            </div>
            <div>
              <h4>Web Development</h4>
              <p>
                First impression is always that the last impression in case the
                web site of your look and feel counts a lot.
              </p>
            </div>
          </a>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <a
            className="nav-link d-flex flex-row"
            data-bs-toggle="tab"
            href="#tab2-2"
          >
            <div>
              <img
                src="/assets/img/icons/online-shop.png"
                className="text-green me-4"
                alt="E-Commerce Development"
              />
            </div>
            <div>
              <h4>E-Commerce Development</h4>
              <p>
                The biggest demand of almost every customer who comes to us is
                the development of electronic commerce.
              </p>
            </div>
          </a>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <a
            className="nav-link d-flex flex-row"
            data-bs-toggle="tab"
            href="#tab2-3"
          >
            <div>
              <img
                src="/assets/img/icons/ecommerce.png"
                className="text-red me-4"
                alt="Mobile App"
              />
            </div>
            <div>
              <h4>Mobile App</h4>
              <p>
                Give your business a hand tool holder that is called as mobile
                application holder.
              </p>
            </div>
          </a>{" "}
        </li>
      </ul>
      {/* /.nav-tabs */}
      <div className="tab-content mt-6 mt-lg-8">
        <div className="tab-pane fade show active" id="tab2-1">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row gx-md-5 gy-5 align-items-center">
                <div className="col-6">
                  <img
                    className="img-fluid rounded shadow-lg d-flex ms-auto"
                    src="/assets/img/photos/sa13.jpg"
                    srcSet="/assets/img/photos/sa13@2x.jpg 2x"
                    alt=""
                  />
                </div>
                {/* /column */}
                <div className="col-6">
                  <img
                    className="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa14.jpg"
                    srcSet="/assets/img/photos/sa14@2x.jpg 2x"
                    alt=""
                  />
                  <img
                    className="img-fluid rounded shadow-lg d-flex col-10"
                    src="/assets/img/photos/sa15.jpg"
                    srcSet="/assets/img/photos/sa15@2x.jpg 2x"
                    alt=""
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/column */}
            <div className="col-lg-6">
              <h2 className="mb-3 text-white">Web Development Development</h2>
              <p className="text-white">
                We develop websites using HTML5 and CSS development from UX
                design and technology consultancy. Front/Back-end Development,
                Deployment and Support Our interactive web application
                development is built on artificial intelligence, VR, UI and more
                to enhance the user experience.
              </p>
              <ul className="icon-list bullet-bg">
                <li>
                  <a href="/services/responsive-website-design/">
                    <i className="fa-regular fa-laptop-mobile" /> Responsive
                    website design
                  </a>
                </li>
                <li>
                  <a href="/services/joomla-development/">
                    <i className="fa-brands fa-joomla" /> Joomla Development
                  </a>
                </li>
                <li>
                  <a href="/services/wordpress-website-development/">
                    <i className="fa-brands fa-wordpress" /> WordPress
                    development
                  </a>
                </li>
              </ul>
              <a href="#" className="btn btn-blue mt-2">
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.tab-pane */}
        <div className="tab-pane fade" id="tab2-2">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="row gx-md-5 gy-5">
                <div className="col-5">
                  <img
                    className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                    src="/assets/img/photos/sa9.jpg"
                    srcSet="/assets/img/photos/sa9@2x.jpg 2x"
                    alt=""
                  />
                  <img
                    className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    src="/assets/img/photos/sa10.jpg"
                    srcSet="/assets/img/photos/sa10@2x.jpg 2x"
                    alt=""
                  />
                </div>
                {/* /column */}
                <div className="col-7">
                  <img
                    className="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa11.jpg"
                    srcSet="/assets/img/photos/sa11@2x.jpg 2x"
                    alt=""
                  />
                  <img
                    className="img-fluid rounded shadow-lg d-flex col-11"
                    src="/assets/img/photos/sa12.jpg"
                    srcSet="/assets/img/photos/sa12@2x.jpg 2x"
                    alt=""
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/column */}
            <div className="col-lg-6">
              <h2 className="mb-3 text-white">E-Commerce Development</h2>
              <p className="text-white">
                We create feature-rich e-commerce apps that hold users back to
                help drive engagement in online stores and increase brand
                visibility.From the implementation of first- and third-party
                platforms to the construction of a personalized eCommerce
                application, We develop flexible, intuitive, beautiful,
                ready-to-use e-commerce systems for mobile devices.
              </p>
              <ul className="icon-list bullet-bg">
                <li>
                  <a href="/services/e-commerce-website-design/">
                    <i className="fa-solid fa-cart-shopping" /> E commerce
                    website design
                  </a>
                </li>
                <li>
                  <a href="/services/magento-development/">
                    <i className="fa-brands fa-magento" /> Magento Development
                  </a>
                </li>
                <li>
                  <a href="/services/woocommerce-website-development/">
                    <i className="fa-solid fa-shop" /> Woocommerce website
                    development
                  </a>
                </li>
              </ul>
              <a href="#" className="btn btn-green mt-2">
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.tab-pane */}
        <div className="tab-pane fade" id="tab2-3">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row gx-md-5 gy-5">
                <div className="col-6">
                  <img
                    className="img-fluid rounded shadow-lg mb-5"
                    src="/assets/img/photos/sa5.jpg"
                    srcSet="/assets/img/photos/sa5@2x.jpg 2x"
                    alt=""
                  />
                  <img
                    className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                    src="/assets/img/photos/sa6.jpg"
                    srcSet="/assets/img/photos/sa6@2x.jpg 2x"
                    alt=""
                  />
                </div>
                {/* /column */}
                <div className="col-6">
                  <img
                    className="img-fluid rounded shadow-lg my-5"
                    src="/assets/img/photos/sa7.jpg"
                    srcSet="/assets/img/photos/sa7@2x.jpg 2x"
                    alt=""
                  />
                  <img
                    className="img-fluid rounded shadow-lg d-flex col-10"
                    src="/assets/img/photos/sa8.jpg"
                    srcSet="/assets/img/photos/sa8@2x.jpg 2x"
                    alt=""
                  />
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/*/column */}
            <div className="col-lg-6">
              <h2 className="mb-3 text-white">Mobile App</h2>
              <p className="text-white">
                Srapsware develops mobile applications that combine excellent
                design, advanced technology and an understanding of commercial
                values. We stand by your side - from design to shipping to
                ensure each mobile solution we offer meets your expectations.
              </p>
              <ul className="icon-list bullet-bg">
                <li>
                  <a href="/services/android-app-development/">
                    <i className="fa-brands fa-android" /> Android App
                    Development
                  </a>
                </li>
                <li>
                  <a href="/services/ios-app-development/">
                    <i className="fa-brands fa-app-store-ios" /> iOS App
                    Development
                  </a>
                </li>
                <li>
                  <a href="/services/mobile-site-design/">
                    <i className="fa-solid fa-mobile-screen fa-2x" /> Mobile
                    site design
                  </a>
                </li>
              </ul>
              <a href="#" className="btn btn-red mt-2">
                Learn More
              </a>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.tab-pane */}
      </div>
      {/* /.tab-content */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-gray">
    <div className="container py-14 pt-md-17 pb-md-15">
      <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="card shadow-lg me-lg-6">
            <div className="card-body p-6">
              <div className="d-flex flex-row">
                <div>
                  <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                    <span className="number">01</span>
                  </span>
                </div>
                <div>
                  <h4 className="mb-1">Collect Ideas</h4>
                  <p className="mb-0">We gather your ideas and initiatives.</p>
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
                  <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                    <span className="number">02</span>
                  </span>
                </div>
                <div>
                  <h4 className="mb-1">Data Analysis</h4>
                  <p className="mb-0">Analyse the demands of your project.</p>
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
                  <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                    <span className="number">03</span>
                  </span>
                </div>
                <div>
                  <h4 className="mb-1">Finalize Product</h4>
                  <p className="mb-0">Design your ideas for reality.</p>
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
            Here are 3 stages of organising our business projects
          </h3>
          <p>
            We are known for offering the most user-friendly and easy-to-use web
            development concepts to our clients and that is considered our
            greatest asset.
          </p>
          <p className="mb-6">
            We develop and provide easy solutions for your hard online models.
          </p>
          <a href="/our-process/" className="btn btn-primary rounded-pill mb-0">
            Learn More
          </a>
        </div>
        {/*/column */}
      </div>
    </div>
    {/* /.container */}
  </section>
  
  <section className="wrapper bg-light py-md-15">
    <div className="container">
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-7 order-lg-2">
          <figure>
            <img
              className="w-auto"
              src="/assets/img/concept/concept8.png"
              srcSet="/assets/img/concept/concept8@2x.png 2x"
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
            control
          </h3>
          <p className="mb-6">
            Srapsware is the global market leader in offering services like web
            development, Cloud Computing, Big data, website design, ecommerce
            development, Web Application, Custom Development, flash, Hosting,
            Mobile apps and much more. We used to cover all types of industries
            like Hospitals, School, Inventory and Trading, Custom business and
            much more.
          </p>
          <div className="row gy-3">
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Simple and quick user interface.</span>
                </li>
                <li className="mt-3">
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Concentrate on future technologies.</span>
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
                  <span>
                    Reactive and super quick hybrid mobile application.
                  </span>
                </li>
                <li className="mt-3">
                  <span>
                    <i className="uil uil-check" />
                  </span>
                  <span>Working with serverless and headless CMS.</span>
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





      </div>

      <Footer />

      <Js />
    </>
  );
};
export async function getStaticProps() {
  // Run API calls in parallel
  const [postsRes, portfoliosRes, testimonialsRes, clientsRes] = await Promise.all([
    fetchAPI("/posts", {
      sort: ["id:desc"],
      pagination: {
        start: 0,
        limit: 10,
      },
      populate: "*",
    }),
    fetchAPI("/portfolios", {
      sort: ["id:desc"],
      pagination: {
        start: 0,
        limit: 10,
      },
      populate: "*",
    }),
    fetchAPI("/testimonials", {
      sort: ["id:desc"],
      pagination: {
        start: 0,
        limit: 10,
      },
      populate: "*",
    }),
    fetchAPI("/clients", {
      sort: ["id:desc"],
      pagination: {
        start: 0,
        limit: 10,
      },
      populate: "*",
    }),
  ]);

  return {
    props: {
      posts: postsRes.data,
      portfolios: portfoliosRes.data,
      testimonials: testimonialsRes.data,
      clients: clientsRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
