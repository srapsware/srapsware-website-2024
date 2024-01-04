import Image from 'next/image'

export default function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <>
        <footer className="bg-navy text-inverse">
          <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
            <div className="d-lg-flex flex-row align-items-lg-center">
              <h3 class="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white footer-talk">
                Excited? Let’s Talk
                <span>
                  You’re our first priority.
                  <br />
                  Rest all can wait.
                </span>
              </h3>
              <a
                href="#"
                className="btn btn-primary rounded-pill mb-0 text-nowrap"
              >
                Get Your Free Quote
              </a>
            </div>
            {/*/div */}
            <hr className="mt-11 mb-12" />
            <div className="row gy-6 gy-lg-0">
              <div className="col-md-4 col-lg-3">
                <div className="widget">
                  <img
                    className="mb-4"
                    src="/assets/img/logo-light.png"
                    srcSet="/assets/img/logo-light@2x.png 2x"
                    alt=""
                  />
                  <p class="mb-4 text-white">
                    <span class="h4 text-white">{getCurrentYear() - 2010}</span>{" "}
                    Years of code baking <i class="fa-solid fa-heart red"></i>
                  </p>
                  
                  <nav class="nav social social-white">
                    <a
                      href="https://www.facebook.com/srapsware"
                      target="_blank"
                    >
                      <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/srapsware" target="_blank">
                      <i class="uil uil-twitter"></i>
                    </a>
                    <a href="https://github.com/srapsware" target="_blank">
                      <i class="uil uil-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/srapsware"
                      target="_blank"
                    >
                      <i class="uil uil-linkedin"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/srapsware?sub_confirmation=1"
                      target="_blank"
                    >
                      <i class="uil uil-youtube"></i>
                    </a>
                  </nav>
                  <p class="pt-5 mb-1">Made in the India</p>
          <p class="since-text mb-1">
            Since 2010&nbsp;
            <Image
      src="/assets/img/icons/india.svg"
      width={27}
      height={20}
      alt="India"
    />
          </p>
                  {/* /.social */}
                </div>
                {/* /.widget */}
              </div>
              {/* /column */}
              <div className="col-md-4 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                  <address className="pe-xl-15 pe-xxl-17">
                  Ground Floor, Bonito Homes, Basai, Sector 70, Noida UP 201307
                  </address>
                  <a href="mailto:sales@srapsware.com">
                    sales<span className="d-none"></span>@
                    <span className="d-none"></span>srapsware.com
                  </a>
                  <br /> +91-7982377273 (Not toll free)
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
                      <a href="#">Make Payment</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Cancellation/Refund policies</a>
                    </li>
                    <li>
                      <a href="#">Terms and conditions</a>
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
                  <h4 className="widget-title text-white mb-3">
                    Our Newsletter
                  </h4>
                  <p className="mb-5">
                    Subscribe to our newsletter to get our news &amp; deals
                    delivered to you.
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
              <div class="col-md-12 pt-6">
        <p class="mb-4">
          &copy; 2010-{getCurrentYear()} Srapsware, All Rights Reserved.
        </p>
      </div>
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
  );
}
