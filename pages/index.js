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
      </div>

      <Footer />

      <Js />
    </>
  );
}
