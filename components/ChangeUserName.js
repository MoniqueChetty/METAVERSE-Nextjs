import { useState } from "react";
import { useMoralis } from "react-moralis";
// import Popup from "./Popup";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  // const [isOpen, setIsOpen] = useState(false);

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current:${user.getUsername()})`
    );
    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        // onClick={() => setIsOpen(true)}
        className="hover:text-pink-700 "
      >
        Change your user name
      </button>
      {/* <Popup open={isOpen} onClose={() => setIsOpen(false)} /> */}
    </div>
  );
}

export default ChangeUserName;
