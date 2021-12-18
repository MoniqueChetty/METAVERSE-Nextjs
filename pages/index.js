import Image from "next/image";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import portal from "../public/images/portal1.jpg";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll  overflow-hidden bg-backg bg-cover">
      {/* bg-gradient-to-b from-black to-fuchsia-900 */}
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="max-w-screen-2xl mx-auto ">
          <Header />

          <Messages />
        </div>
      </div>
    </div>
  );
}
