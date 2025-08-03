import { Link, useNavigate } from "react-router-dom";
import Animationwrapper from "../common/page-animation";
import { useContext } from "react";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

const UserNavigationPanel = ({closeDropdown }) => {
  const navigate = useNavigate();
  const { userAuth: { username }, setUserAuth } = useContext(UserContext);

  const signOutUser = () => {
    console.log("Sign out clicked");
    removeFromSession("user");
    setUserAuth({
      access_token: null,
      username: null,
      profile_img: null,
    });
    closeDropdown();
    navigate("/signin"); // Redirect after logout
  };

  return (
    <Animationwrapper
      className="absolute right-0 z-50"
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white absolute right-0 border w-60 duration-500 shadow-lg rounded-md">
        <Link to="/editor" className="flex gap-2 link md:hidden pl-8 py-4" onClick={closeDropdown}>
          <i className="fi fi-rr-file-edit"></i>
          <p> Write</p>
        </Link>

        <Link to={`/user/${username}`} className="link pl-8 py-4" onClick={closeDropdown}>
          Profile
        </Link>
        <Link to="/dashboard/blogs" className="link pl-8 py-4" onClick={closeDropdown}>
          Dashboard
        </Link>

        <Link to="/settings/edit-profile" className="link pl-8 py-4" onClick={closeDropdown}>
          Settings
        </Link>

        <span className="border-t border-gray-200 block w-full"></span>

        <button
          className="text-left w-full hover:bg-gray-100 px-8 py-4"
          onClick={signOutUser}
        >
          <h1 className="font-bold text-xl mb-1">Sign out</h1>
          <p className="text-gray-500">@{username}</p>
        </button>
      </div>
    </Animationwrapper>
  );
};

export default UserNavigationPanel;
