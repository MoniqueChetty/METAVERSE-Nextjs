import Head from "next/head";
import Login from "../components/login";
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
      <button onClick={logout}>Logout</button>
    </div>
  );
}
