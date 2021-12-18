import { useState } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Popup({ open, onClose }) {
  if (!open) return null;

  const { setUserData, user } = useMoralis();
  const [username, setUsernames] = useState("");

  const setUsername = (e) => {
    e.preventDefault();

    if (!username) return;
    console.log(username);
    setUserData({ username });
    console.log(username);
    onClose();
  };

  return (
    <form className="flex flex-col text-center bg-black opacity-90 w-80 h-48 px-6 py-4 max-w-2xl shadow-2xl rounded-lg border-4 border-blue-400 fixed left-1/2 bottom=1/2 ">
      <div
        className="text-gray-500 absolute top-3 right-5 text-lg cursor-pointer"
        onClick={onClose}
      >
        x
      </div>
      <div className="flex items-center ">
        <div className={`relative h-9 w-9 pr-6 `}>
          <Avatar />
        </div>
        <div className="pl-5 text-lg"> {user.getUsername()}</div>
      </div>

      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 text-lg"
        type="text"
        value={username}
        onChange={(e) => setUsernames(e.target.value)}
        placeholder={`Enter a new User Name  ...`}
      ></input>
      <button
        type="submit"
        onClick={setUsername}
        className="font-bold text-pink-500"
      >
        Change user name
      </button>
    </form>
  );
}

export default Popup;

{
  /* <div>

    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
           
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div> */
}
