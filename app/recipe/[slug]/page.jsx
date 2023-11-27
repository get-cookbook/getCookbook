"use client";
import Header from "@/app/Components/Header";
import IngDisplay from "@/app/Components/IngDisplay";
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
    <div>
      <Header />
      <div className="max-w-full bg-orange-300 pb-10 px=0 flex justify-between">
        
        <div>
          <div className="prose w-5/6 prose-invert p-10 bg-board  bg-blend-saturation rounded-3xl m-72 scale-150" key={recipe_id}>
            <div className="rounded-3xl w-1/3 pl- h-10 bg-orange-300 align-middle justify-center"></div>
            {editorHtml.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <div className="pl-10">
                    <div className="">
                      <div className="" dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
                    </div>
                  </div>
                );
              }
              return item;
            })}
          </div>
        </div>
        <IngDisplay array={[1,2,3]} />
      </div>
    </div>
  );
}
