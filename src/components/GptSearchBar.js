import React, { useRef, useState } from "react";
import { lang } from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import OpenAI from 'openai'; // Using this for production base app dynamic use of gpt key only
//import openai from "../utils/openAPI"; // Will use this when Using backend or system local env file only 
import { APIOptions } from "../utils/urls";
import { addGptMovies, addKey, addSearchedMovies } from "../redux/gptSlice";

const GptSearchBar = () => {
  const [isValidkey, setIsValidKey] = useState(false);
  const [errorinKey, SetErrorInKey] = useState(false)

  const getAPIKEY = useSelector((store)=>{ return store.gpt?.key})
  const getChoosenLang = useSelector((store) => {
    return store.lang?.lang;
  });
  const searchedMsg = useRef(null);
  const dispatch = useDispatch();
  const userOpenAiKey = useRef(null);

  //----- Open AI ky check ----
  const handleValidateOpenAIKey = async () => {
    if (userOpenAiKey.current.value.length === 51) {
        setIsValidKey(true)
        SetErrorInKey(false)
        dispatch(addKey(userOpenAiKey.current.value))
    } else {
        SetErrorInKey(true)
    }
    userOpenAiKey.current.value = "";
  };

  const getTmdbMovies = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      APIOptions
    );
    const json = await data.json();
    const recommended = json.results.filter((movie) => {
      return (
        movie.original_title === movieName &&
        (movie.original_language === "en" || movie.original_language === "hi")
      );
    });
    return recommended;
  };

  const handleGptSearch = async () => {
    const query =
      "Give me 5 movie names only and no other text should be in answer only 5 movies name which should be comma seperated like this example - movie1,movie2,movie3,movie4,movie5. Give me movie names according to type and category mentioned:" +
      searchedMsg.current.value;
      //------------------ For product dynamic usage only other wise wont use this logic and simply import openai from utils------------------//
      const openai = new OpenAI({
        apiKey: getAPIKEY,
        dangerouslyAllowBrowser: true
      });
      //--------------------------------------------------------------------------------------------------------------------------------------//
    const gptAnswer = async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      return chatCompletion.choices[0].message.content;
    };
    const resultString = await gptAnswer();
    const result = resultString.split(",");
    console.log("Movies String- " + resultString);
    console.log("Movies array- " + result);

    const moviePromises = result.map((movie) => {
      return getTmdbMovies(movie);
    });
    //console.log("Map done") //- See this console log will be called immidiately once moviePromises are called and getTmdbMovies function is called 5 times but that is async function so to get the value of moviePromise we need to wait and use PromiseAll and during the time moviePromise dosent get the value it will have Promise and we cant use those promise as value in program.
    const movieList = await Promise.all(moviePromises);
    if (!movieList || !result) return;
    console.log("Movie List" + movieList);
    dispatch(addSearchedMovies(movieList));
    dispatch(addGptMovies(result));
  };

  return (
    <div className="pt-[10%]">
      <div className="w-screen flex justify-center">
        {isValidkey ? (
          <form
            className="bg-black p-4 rounded-md w-3/5 grid grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={searchedMsg}
              type="text"
              className="py-4 px-4 rounded-l-md col-span-9"
              placeholder={lang[getChoosenLang].placeholder}
            />
            <button
              onClick={handleGptSearch}
              className="bg-red-700 py-4 px-4 ml-1 rounded-md-2 rounded-r-md col-span-3 text-xl font-semibold text-white hover:opacity-85"
            >
              {lang[getChoosenLang].search}
            </button>
          </form>
        ) : (
          <div
            className="bg-black p-4 rounded-md w-3/5 grid grid-cols-12"
          >
            <input
              ref={userOpenAiKey}
              type="text"
              className="py-4 px-4 rounded-l-md col-span-9 text-black"
              placeholder={errorinKey?"Invalid Key ❌ Enter correct Open AI Key here.." :'Enter OPEN AI key here to use Netflix GPT Feature'}
            />
            <button
              onClick={handleValidateOpenAIKey}
              className="bg-red-700 py-4 px-4 ml-1 rounded-md-2 rounded-r-md col-span-3 text-xl font-semibold text-white hover:opacity-85"
            >
              {lang[getChoosenLang].use}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearchBar;
