import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Container() {
  const { loading, gif, fetchData } = useGif();
  const [tag, setTag] = useState("Jujutsu Kaisen");

  return (
    <div className="container1 w-11/12 sm:w-4/6 p-4 flex flex-col items-center justify-center bg-pink-300 mx-auto rounded-lg shadow-md">
      <h2 className="random_gif text-3xl font-bold mb-4">A Random GIF</h2>
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="gif_container object-cover h-96 rounded-md shadow-lg mb-4"
          src={gif}
          alt="giffy"
        />
      )}
      <button
        className="generate_random bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        onClick={() => fetchData("Jujutsu Kaisen")}
      >
        Generate
      </button>
    </div>
  );
}
