import Image from "next/image";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import portal from "../public/images/portal3.jpg";

export default function Home() {
  const { isAuthenticated, login, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col absolute  z-50 h-4/6 w-full items-center justify-center space-y-4 ml-32 ">
        <h1 className="font-bold text-white"> Welcome to the METAVERSE</h1>
        <button
          onClick={logout}
          className="bg-yellow-500 rounded-lg p-5 px-10 font-bold animate-pulse"
        >
          Logout
        </button>
      </div>
      <div className="w-full h-screen ">
        <Image
          // src="https://links.papareact.com/55n"
          src={portal}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
