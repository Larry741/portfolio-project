import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Contact from "../components/Conatct/Contact";
import Header from "../components/Header/Header";
import Works from "../components/Works/Works";
import Footer from "../components/footer/Footer";

import styles from "../styles/Home.module.scss";
import HeaderLinks from "../components/Header/HeaderLinks/HeaderLinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderLinks />
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
