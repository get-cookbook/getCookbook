"use client";
import IngSearch from "../Components/IngSearch";
import dynamic from "next/dynamic";
import { useState } from "react";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("./editor"), {
  ssr: false,
});

export default function EditorPage() {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState();
  return (
    <div className="bg-yellow-600 h-max pb-72">
      <div className="header flex justify-between align-bottom pb-3 h-60 bg-transparent">
        <IngSearch/>
        <div className="title_description flex flex-col justify-end">
          <input
            type="text"
            placeholder="Title"
            className="bg-transparent text-white px-3 py-1 m-3 focus:outline-none text-6xl border-b-2 border-dashed border-white font-bold"
          />
          <input
            type="text"
            placeholder="Description"
            className="bg-transparent text-white px-3 py-1 m-3 focus:outline-none border-b-2 border-dashed border-white"
          />
        </div>
      </div>
      <Editor data={data} onChange={setData} holder="editorjs-container" />
    </div>
  );
}
