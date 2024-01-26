import React from "react";

export default function Spinner() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-1 w-full md:w-60 h-5/6 p-4">
      <div className="w-full md:w-48 h-6 bg-slate-400 rounded-md mb-3"></div>
      <div className="w-full md:w-28 h-4 bg-slate-400 rounded-md mb-4"></div>
      <div className="h-4 bg-slate-400 w-full rounded-md mb-4"></div>
      <div className="h-4 bg-slate-400 w-full rounded-md mb-4"></div>
      <div className="h-4 bg-slate-400 w-1/2 md:w-full rounded-md"></div>
    </div>
  );
}
