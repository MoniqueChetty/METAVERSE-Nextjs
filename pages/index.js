import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, login, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Welcome to the METAVERSE</h1>
      <button
        onClick={logout}
        className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
      >
        Logout
      </button>
    </div>
  );
}
