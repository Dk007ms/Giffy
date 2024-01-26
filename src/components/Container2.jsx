import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Container() {
  const { loading, gif, fetchData } = useGif();
  const [tag, setTag] = useState("Jujutsu Kaisen");

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center bg-green-500 rounded-md">
      <h2 className="text-3xl font-bold text-white mb-4">Random {tag} GIF</h2>
      {loading ? (
        <Spinner />
      ) : (
        <img
          className="object-cover w-full max-h-96 mb-4 rounded-md"
          src={gif}
          alt="giffy"
        />
      )}
      <div className="flex items-center">
        <input
          className="w-2/3 p-2 mr-2 rounded-md border border-gray-300"
          type="text"
          placeholder="Enter tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={()=>fetchData(tag)}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
