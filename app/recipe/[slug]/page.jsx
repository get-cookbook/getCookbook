"use client";
import { useState, useEffect } from "react";

const edjsHtml = require("editorjs-html");

export default function recipe({ params }) {
  const [editorHtml, setEditorHtml] = useState([]);
  const recipe_id = params.slug;

  if (!recipe_id) {
    return <div>404</div>;
  }

  const edjsParser = edjsHtml();
  const htmlify = edjsParser.parse;
  async function fetchData() {
    const response = await fetch(
      "/api/get_editor_data?recipe_id=" + recipe_id,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const recipe_data = await response.json();
    console.log(recipe_data);
    setEditorHtml(await htmlify(recipe_data.editorjs_data));
  }

  useEffect(() => {
    fetchData().catch((error) => {
      console.error("Error:", error);
    });
  }, []);

  return (
    <div className="prose max-w-full prose-invert" key={recipe_id}>
      {editorHtml.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
}
