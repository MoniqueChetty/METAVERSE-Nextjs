import Image from "next/image";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import metamasklogo from "../public/images/metamasklogo.png";
import anipic from "../public/images/anipic.png";
import portal from "../public/images/portal.jpg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-black ">
      <div className="pt-50 md:pr-96 flex flex-col absolute  z-50 h-4/6 w-full items-center justify-center space-y-4  ">
        <Image
          // src="https://links.papareact.com/3pi"
          src={anipic}
          className="object-cover rounded-full"
          height={200}
          width={200}
        />

        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to METAVERSE
        </button>
        <Link href="https://medium.com/@alias_73214/guide-how-to-setup-metamask-d2ee6e212a3e">
          <div className="bg-yellow-500 rounded-lg  px-4 font-bold animate-[wiggle_1s_ease-in-out_infinite] ">
            <Image src={metamasklogo} height={75} width={160} />
          </div>
        </Link>
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

export default Login;
