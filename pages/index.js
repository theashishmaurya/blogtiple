import Head from "next/head";
import Features from "../components/landingpage/features/feature";
import Footer from "../components/landingpage/footer/footer";
import Header from "../components/landingpage/header/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blogtiple: Blogging like pro</title>
        <meta
          name='Blogtiple: A cross blogging website with everything you need at one place'
          content='Bloggtiple is a cross blogging website where you can write on Blogtiple and publish the same aricle on different platforms like Hashnode, Medium or DEV and so on'
        />
        <meta
          name='keywords'
          content='cross blogging, blogging to multiple site easy, blogging to hashnode medium and dev, publish articles from medium to dev.to and hashnode '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Features />
      <Footer />
    </div>
  );
}
