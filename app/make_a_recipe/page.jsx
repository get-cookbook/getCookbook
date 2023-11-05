"use client";
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
  return <Editor data={data} onChange={setData} holder="editorjs-container" />;
}
