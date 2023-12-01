"use client";
import RecipeCard from "../Components/RecipeCard";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function Explore() {
    const bgStyles = {
        div: {
            position: "absolute",
            width: "100%",
            overflowX: "hidden",
        },
        svg: {
            width: "100%",
        },
    };

    const [recipeComponents, setRecipeComponents] = useState([]);
    const [recipeJson, setRecipeJson] = useState([]);
    async function fetchData() {
        const response = await fetch(`/api/get_all_recipes`, {
            method: "get",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user_recipes = await response.json();
        let recipeComponents_local = [];
        setRecipeJson(user_recipes);
        console.log(user_recipes);
        user_recipes.map((recipe) => {
            recipeComponents_local.push(
                <RecipeCard key={recipe._id} recipe={recipe} />,
            );
        });

        setRecipeComponents(recipeComponents_local);
    }

    useEffect(() => {
        fetchData().catch((error) => {
            console.error("Error:", error);
        });
    }, []);

    function search() {
        const search_query = document.getElementById("searchInput").value;
        const filteredRecipes = recipeJson.filter((recipe) => {
            return recipe.title.toLowerCase().includes(search_query.toLowerCase());
        });
        let recipeComponentsLocal = [];
        filteredRecipes.map((recipe) => {
            recipeComponentsLocal.push(
                <RecipeCard key={recipe._id} recipe={recipe} />,
            );
        });
        setRecipeComponents(recipeComponentsLocal);
    }

    return (
        <div>
            <div style={{ ...bgStyles.div, top: "480px", zIndex: -1 }}>
                <img alt="Picture" src="/fish_bg.svg" className="w-full" />
            </div>
            <div className="relative flex p-20">
                <div className="text-9xl absolute">get(</div>
                <div className="searchBox ml-56 mt-12 w-3/4">
                    <input
                        className="searchInput"
                        type="text"
                        name=""
                        placeholder="Find your next craving..."
                        id="searchInput"
                    />
                    <button
                        className="searchButton flex justify-center"
                        href="#"
                        onClick={search}
                    >
                        <img src="/search.svg" alt="search" className="w-full p-2" />
                    </button>
                </div>
                <div className="text-9xl absolute right-52">)</div>
            </div>
            <div className="flex justify-center align-center">
                <div className="grid grid-cols-3 justify-center items-stretch">
                    {recipeComponents ? recipeComponents : <div>loading...</div>}
                </div>
            </div>
        </div>
    );
}
