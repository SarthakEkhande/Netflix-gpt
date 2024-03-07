import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import lang from '../utils/LanguageConstant'
import openai from '../utils/openai'
import { addGptMovieResult } from "../utils/GptSlice"

const GPTSearchbar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchtext = useRef(""); // Initialize with an empty string


    //search movie in TMDB database

    const searchMovieTMDB=async(movie)=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
              movie +
              "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
          );

          const json = await data.json();

        // console.log(json);
        // return json.results
        return json.results;

    }
    
    const handlegptsearchclick = async () => {
        console.log(searchtext.current.value);

      
        const gptQuery="Act as a movie recommandation System and suggest some movies for that query :" + searchtext.current.value + ".only give me name of 5 movies, comma separated movies, like the example result giving ahead: Gaddar, Sholey, Don, Golmal, Koi Mil gaya"
        const gptresult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

         if(!gptresult.choices){
             //Write error handloing
         }
          console.log(gptresult.choices[0]?.message?.content.split(", "));
          //array of movies

          //for each movie i will search TMDB API
          
          const gptMovies=gptresult.choices[0]?.message?.content.split(", ")

        //  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
         const Promisearray = gptMovies.map((movie) => searchMovieTMDB(movie));
          //array of promises
       
          const tmdbResults = await Promise.all(Promisearray);
          console.log(tmdbResults);
          dispatch(addGptMovieResult({movieName:gptMovies,movieResults:tmdbResults}))

    };

    return (
        <div className='pt-[35%] md:pt-[7%] flex justify-center'>
            <form className='w-full bg-black md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder={lang[langKey].gptsearchplaceholder}
                    className='p-4 m-4 col-span-9'
                    ref={searchtext} // Assign the ref to the input
                />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg' onClick={handlegptsearchclick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchbar;
