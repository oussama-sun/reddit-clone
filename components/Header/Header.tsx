import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
import AouthBtn from "../Aouth/AouthBtn";
import AouthModal from "../Aouth/AouthModal";
import User from "./User";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <Image src="/redditFace.svg" width="40" height={"40"} alt="logo" />
          <Image src="/redditText.svg" width="80" height={"40"} alt="logoT" />
        </div>
        <form
          action=""
          method="post"
          className="flex rounded-md items-center flex-grow border px-3 py-2 bg-gray-100"
        >
          <div className="fa-solid fa-magnifying-glass mr-3 text-gray-400" />
          <input
            type="text"
            className="bg-transparent text-gray-400 outline-none flex-grow"
            placeholder="Search Hear"
          />
        </form>
        {user ? (
          <User />
        ) : (
          <>
            <AouthModal />
            <AouthBtn />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
