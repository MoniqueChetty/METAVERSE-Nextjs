import Image from "next/image";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import portal from "../public/images/portal3.jpg";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className=" flex flex-col absolute  z-50 h-4/6 w-full items-center justify-center space-y-4 ml-32 "> */}
      {/* <h1 className="font-bold text-white"> Welcome to the METAVERSE</h1> */}
      <div className=" ">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
      </div>

      {/* </div> */}
      {/* <div className="w-full h-screen ">
        <Image
          // src="https://links.papareact.com/55n"
          src={portal}
          layout="fill"
          objectFit="cover"
        />
      </div> */}
    </div>
  );
}
