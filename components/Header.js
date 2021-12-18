import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";
import anipic from "../public/images/anipic.png";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 backdrop-blur-md shadow-sm border-b-2 border-pink-500 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full "
            objectFit="cover"
            src={anipic}
            layout="fill"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <div className="text-3xl ">Welcome to the Metaverse</div>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
