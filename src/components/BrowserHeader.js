import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { netflixIcon, proflieIcon } from "../utils/urls";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../redux/gptSlice";
import { supportedLanguages } from "../utils/lang";
import { selectLang } from "../redux/langSlice";

const BrowserHeader = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch()
  const gptSearch = useSelector((store=> store.gpt?.search))

  const handleOnSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleGptSearch = ()=>{
      dispatch(toggleGptSearchView())
  }

  const handleLangSelect = (option)=>{
    dispatch(selectLang(option))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function called when the components get unmounted so that event listner
    // gets removed from window object and stop reffering the varibles or functions that are no longer in scope
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-30 fixed transition-all duration-300 ${
        scrolled ? "bg-black" : ""
      }`}
    >
      <div className="flex w-full px-12 py-2  bg-gradient-to-b from-black justify-between">
        <div className="">
          <img className="w-[120px]" src={netflixIcon} alt="Netflix icon" />
        </div>

        <div className="w-full flex justify-end">{gptSearch? (
          <select onChange={(e)=>handleLangSelect(e.target.value)} className="px-2 my-1 rounded-md bg-gray-800 text-white">
            {supportedLanguages.map((lang)=>{
               return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            })}
          </select>
        ) : null}
          
          <button onClick={handleGptSearch} className="bg-white rounded-md text-black hover:bg-opacity-80 m-1 px-3 mx-6 hover:cursor-pointer">
            {gptSearch? "Go Back" : "GPT Search"}
          </button>
          <img className="rounded-md m-1" alt="" src={proflieIcon} />
          <button
            onClick={handleOnSignOut}
            className="bg-white rounded-md text-black hover:bg-opacity-80 m-1 px-3 mx-1 hover:cursor-pointer"
          >
            Sign-out
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowserHeader;
