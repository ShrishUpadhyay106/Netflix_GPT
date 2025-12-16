import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch= useDispatch();

    const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

   useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user ;
        dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
       dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();//for unsuscribing the onauthchanged function when unmounted
  }, []);

  return (
    <div className="absolute h-[98px] w-screen px-8 py-2 bg-gradient-to-b from-black z-50  flex justify-between">
   
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
     { user && (<div className="flex p-4 ">
        <img
          className=" w-12 h-12 rounded-lg "
          src={user.photoURL}
          alt="usericon"
        />
        <button
          onClick={handleSignOut}
          className="p-3 mx-2  font-bold text-white border-transparent px-4 py-2 rounded-md hover:scale-105 hover:bg-red-600 transition duration-300"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};
export default Header;
