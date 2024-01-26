import React, { useEffect, useState } from "react";
import axios from "axios";

// Example usage in your React component
const apiKey = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

function useGif() {
  const [loading, setloading] = useState(false);
  const [gif, setgif] = useState("");

  async function fetchData(tag) {
    setloading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageUrl = data.data.images.downsized_large.url;
    setgif(imageUrl);
    setloading(false);
  }
  useEffect(() => {
    fetchData("Jujutsu Kaisen");
  }, []);

  return { gif, loading, fetchData };
}

export default useGif;
