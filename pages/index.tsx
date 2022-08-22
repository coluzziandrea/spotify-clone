import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Sidebar></Sidebar>
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
