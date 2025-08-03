import { Link, useNavigate } from "react-router-dom";
import Animationwrapper from "../common/page-animation";
import { useContext } from "react";
import { UserContext } from "../App";
import { removeFromSession } from "../common/session";

const UserNavigationPanel = () => {
  const { userAuth: { username }, setUserAuth } = useContext(UserContext);
  const navigate = useNavigate();

  const signOutUser = () => {
    removeFromSession("user");
    setUserAuth({ access_token: null });
    navigate("/signin"); // ✅ redirect after logout
  };

  return (
    <Animationwrapper className="absolute right-0 z-50" transition={{ duration: 0.2 }}>
      <div className="bg-white absolute right-0 border w-60 duration-200">
        <Link to="/editor" className="flex gap-2 link md:hidden pl-8 py-4">
          <i className="fi fi-rr-file-edit"></i>
          <p> Write</p>
        </Link>

        <Link to={`/user/${username}`} className="link pl-8 py-4">Profile</Link>
        <Link to="/dashboard/blogs" className="link pl-8 py-4">Dashboard</Link>
        <Link to="/settings/edit-profile" className="link pl-8 py-4">Settings</Link>

        <span className="absolute border-t border-grey w-[100%]"></span>

        <button
          className="text-left p-4 hover:bg-grey w-full pl-8 py-4"
          onClick={signOutUser}
        >
          <h1 className="font-bold text-xl mg-1">Sign out</h1>
          <p className="text-dark-grey">@{username}</p>
        </button>
      </div>
    </Animationwrapper>
  );
};

export default UserNavigationPanel;
