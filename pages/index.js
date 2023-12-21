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
      
        <Header />

        <h1>Welcome to home</h1>

        <Footer />
      
      <Js />
    </>
  );
}