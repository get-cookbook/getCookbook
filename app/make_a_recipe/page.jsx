"use client";
import IngSearch from "../Components/IngSearch";
import dynamic from "next/dynamic";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("./editor"), {
  ssr: false,
});

export default function EditorPage() {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState();
  const [addedIngredients, setAddedIngredients] = useState([]);
  const { user, googleSignIn, logOut } = UserAuth();
  const router = useRouter();

  const submit = async () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const _id = user.uid + Date.now();
    const request = {
      title: title,
      description: description,
      _id: _id,
      ingredients: addedIngredients,
      recipe: data,
    };
    try {
      await fetch("/api/make_a_recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
    } catch (e) {
      console.log("Error updating recipe to db");
    } finally {
      router.replace("/");
    }
  };

  return (
    <div className="bg-yellow-600 h-max pb-72">
      <div className="header flex justify-between align-bottom pb-3 h-60 bg-transparent">
        <IngSearch
          addedIngredients={addedIngredients}
          setAddedIngredients={setAddedIngredients}
        />
        <div className="title_description flex flex-col justify-end">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="bg-transparent text-white px-3 py-1 m-3 focus:outline-none text-6xl border-b-2 border-dashed border-white font-bold"
          />
          <input
            type="text"
            id="description"
            placeholder="Description"
            className="bg-transparent text-white px-3 py-1 m-3 focus:outline-none border-b-2 border-dashed border-white"
          />
        </div>
      </div>
      <Editor data={data} onChange={setData} holder="editorjs-container" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
