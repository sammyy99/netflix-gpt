import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { netflixIcon, proflieIcon } from "../utils/urls";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const BrowserHeader = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function called when the components get unmounted so that event listner 
    // gets removed from window object and stop reffering the varibles or functions that are no longer in use
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
      <div className="flex px-12 py-2 w-full bg-gradient-to-b from-black justify-between">
        <div className="">
          <img className="w-[120px]" src={netflixIcon} alt="Netflix icon" />
        </div>

        <div className="flex">
          <img className="rounded-lg p-2 w-full" alt="" src={proflieIcon} />
          <button
            onClick={handleOnSignOut}
            className="px-1 text-s font-semibold text-white"
          >
            (SignOut)
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowserHeader;
