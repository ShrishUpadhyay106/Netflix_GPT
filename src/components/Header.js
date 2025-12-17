import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearchMovies } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch= useDispatch();

    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
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

  const handleGpt=() =>{
    dispatch(toggleSearchMovies());
  }

  const handleLangChange = (e) =>{
    dispatch(changeLang(e.target.value));
  }

  return (
    <div className="absolute h-[98px] w-screen px-8 py-2 bg-gradient-to-b from-black z-50  flex justify-between">
   
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
     { user && (<div className="flex p-4 ">
        {showGptSearch&&
          (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key ={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))
          }
        </select>
        )}
        <button 
          onClick={handleGpt}
          className="px-3 mx-3 text-white rounded-md bg-purple-400 hover:scale-105 hover:bg-purple-500 transition duration-300">
          {showGptSearch?"Home" : "GPT Search"}
        </button>
        <img
          className=" w-12 h-12 rounded-lg "
          src={user.photoURL}
          alt="usericon"
        />
        <button
          onClick={handleSignOut}
          className="p-3 mx-3  font-bold text-white border-transparent px-4 py-2 rounded-md bg-red-500 hover:scale-105 hover:bg-red-600 transition duration-300"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};
export default Header;
