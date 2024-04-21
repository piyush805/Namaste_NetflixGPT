import React, { useEffect } from "react";
import { LOGO, PROFILE_AVATAR, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.config.lang);
  const showGptSearchView = useSelector((state) => state.gpt.showGptSearch);

  const user = useSelector((state) => state.user);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /**
     *   authStateChange listener + redirect here
     * */
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        dispatch(addUser({ email, displayName, uid }));
        navigate("/browse");
      } else {
        // sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      // cleanup for component unmounts
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 px-0 sm:px-36 py-0 lg:py-2  z-50 w-full flex flex-row sm:flex-row  justify-center md:justify-between items-center  bg-black lg:bg-transparent lg:bg-gradient-to-b lg:from-stone-950">
      <div
        onClick={() => {
          navigate("/browse");
        }}
      >
        <img src={LOGO} className="h-12 sm:h-16 cursor-pointer" alt="logo" />
      </div>

      <div className=" text-white flex items-center justify-center gap-1 sm:gap-2 md:hover:text-gray-200">
        {!!user && (
          <>
            <div>
              <button
                className="rounded bg-purple-600 px-2 md:px-2 py-1 md:py-1 md:hover:bg-purple-800 mr-2 sm:mr-4 text-xs xs:text-sm md:text-md "
                onClick={handleGptSearchClick}
              >
                {showGptSearchView
                  ? lang[selectedLanguage].goBack
                  : lang[selectedLanguage].gptSearch}
              </button>
            </div>

            <div>
              <img
                src={PROFILE_AVATAR}
                alt="netflix"
                width={"40px"}
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
            <div
              onClick={handleSignOut}
              className="cursor-pointer text-xs sm:text-sm md:text-md "
            >
              <div>{lang[selectedLanguage].signOutText}</div>
            </div>
          </>
        )}
        <select
          className="bg-black text-xs sm:text-sm md:text-md  rounded py-1 px-2 bg-opacity-35 focus:outline-none focus:border-none cursor-pointer text-white"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          {SUPPORTED_LANGUAGES.map((lang, index) => (
            <option key={`${lang}-${index}`} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
