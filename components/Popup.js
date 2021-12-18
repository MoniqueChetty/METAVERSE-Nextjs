import { useState } from "react";
import { useMoralis } from "react-moralis";

function Popup({ open, onClose }) {
  if (!open) return null;

  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [isOpen, setIsOpen] = useState(false);
  const [usernames, setUsernames] = useState(user.getUsername());

  const setUsername = (e) => {
    if (!usernames) return;
    setUserData({ usernames });
    setIsOpen(false);
  };

  return (
    // <div className="w-96 h=96 z-50 fixed object-center bg-white">
    //   <button onClick={onClose}>Close</button>
    //   This is my popup/
    // </div>
    <form className="flex flex-col text-center bg-black opacity-90 w-56 h-36 px-6 py-4 max-w-2xl shadow-2xl rounded-lg border-4 border-blue-400 fixed left-1/2 bottom=1/2 ">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={usernames}
        onChange={(e) => setUsernames(e.target.value)}
        placeholder={`Enter a new User Name ${user.getUsername()} ...`}
      ></input>
      <button
        type="submit"
        onClick={setUsername()}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default Popup;
