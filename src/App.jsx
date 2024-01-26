import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Container2 from "./components/Container2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-max min-h-screen bg-orange-300 p-4 flex flex-col overflow-x-hidden gap-4">
      <h1 className="Heading w-9/12 bg-black text-white mx-auto h-12 flex justify-center items-center text-xl sm:text-4xl font-mono font-semibold rounded-lg">
        Random GIFs
      </h1>
      <Container />
      <Container2/>
    </div>
  );
}

export default App;
