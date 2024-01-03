import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>
<>
  <footer className="bg-navy text-inverse">
    <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div className="d-lg-flex flex-row align-items-lg-center">
        <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
          Join our community by using our services and grow your business.
        </h3>
        <a href="#" className="btn btn-primary rounded-pill mb-0 text-nowrap">
          Try It For Free
        </a>
      </div>
      {/*/div */}
      <hr className="mt-11 mb-12" />
      <div className="row gy-6 gy-lg-0">
        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <img
              className="mb-4"
              src="./assets/img/logo-light.png"
              srcSet="./assets/img/logo-light@2x.png 2x"
              alt=""
            />
            <p className="mb-4">
              © 2023 Sandbox. <br className="d-none d-lg-block" />
              All rights reserved.
            </p>
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
        {/* /column */}
        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <h4 className="widget-title text-white mb-3">Get in Touch</h4>
            <address className="pe-xl-15 pe-xxl-17">
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a href="mailto:#">info@email.com</a>
            <br /> 00 (123) 456 78 90
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <h4 className="widget-title text-white mb-3">Learn More</h4>
            <ul className="list-unstyled  mb-0">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="col-md-12 col-lg-3">
          <div className="widget">
            <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
            <p className="mb-5">
              Subscribe to our newsletter to get our news &amp; deals delivered
              to you.
            </p>
            <div className="newsletter-wrapper">
              {/* Begin Mailchimp Signup Form */}
              <div id="mc_embed_signup2">
                <form
                  action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&id=b49ef47a9a"
                  method="post"
                  id="mc-embedded-subscribe-form2"
                  name="mc-embedded-subscribe-form"
                  className="validate dark-fields"
                  target="_blank"
                  noValidate=""
                >
                  <div id="mc_embed_signup_scroll2">
                    <div className="mc-field-group input-group form-floating">
                      <input
                        type="email"
                        defaultValue=""
                        name="EMAIL"
                        className="required email form-control"
                        placeholder="Email Address"
                        id="mce-EMAIL2"
                      />
                      <label htmlFor="mce-EMAIL2">Email Address</label>
                      <input
                        type="submit"
                        defaultValue="Join"
                        name="subscribe"
                        id="mc-embedded-subscribe2"
                        className="btn btn-primary "
                      />
                    </div>
                    <div id="mce-responses2" className="clear">
                      <div
                        className="response"
                        id="mce-error-response2"
                        style={{ display: "none" }}
                      />
                      <div
                        className="response"
                        id="mce-success-response2"
                        style={{ display: "none" }}
                      />
                    </div>{" "}
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                        tabIndex={-1}
                        defaultValue=""
                      />
                    </div>
                    <div className="clear" />
                  </div>
                </form>
              </div>
              {/*End mc_embed_signup*/}
            </div>
            {/* /.newsletter-wrapper */}
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </footer>
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</>

<script src="/assets/js/plugins.js"></script>
<script src="/assets/js/theme.js"></script>
    </>
  )
}
