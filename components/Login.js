import Image from "next/image";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import metamasklogo from "../public/images/metamasklogo.png";
import anipic from "../public/images/anipic.png";
import portal from "../public/images/portal2.jpeg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-black ">
      <div className="pt-50 md:pl-96 flex flex-col absolute  z-50 h-4/6 w-full items-center justify-center space-y-4 ">
        <div className="backdrop-blur-md flex flex-col items-center space-y-4 p-10 rounded-lg">
          <Image
            src={anipic}
            className="object-cover rounded-full"
            height={200}
            width={200}
          />

          <button
            onClick={authenticate}
            className="bg-yellow-500 rounded-lg px-9 py-5 font-bold animate-pulse"
          >
            Login to METAVERSE
          </button>
          <Link href="https://medium.com/@alias_73214/guide-how-to-setup-metamask-d2ee6e212a3e">
            <a target="_blank">
              <div className="">
                <p className="font-bold">Create a MetaMask wallet</p>
                <Image src={metamasklogo} height={75} width={160} />
              </div>
            </a>
          </Link>
        </div>
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
