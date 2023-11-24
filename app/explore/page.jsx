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

    async function fetchData() {
        const response = await fetch(`/api/get_all_recipes`, {
            method: "get",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user_recipes = await response.json();
        let recipeComponents_local = [];
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

    return (
        <div>
            <div style={{ ...bgStyles.div, top: "480px", zIndex: -1 }}>
                <img alt="Profile Picture" src="/fish_bg.svg" className="w-full" />
            </div>
            <div className="relative flex p-20">
                <div className="text-9xl absolute">get(</div>
                <div className="searchBox ml-56 mt-12 w-3/4">
                    <input
                        className="searchInput"
                        type="text"
                        name=""
                        placeholder="Find your next craving..."
                    />
                    <button className="searchButton flex justify-center" href="#">
                        <img src="/search.svg" alt="search" className="w-full p-2" />
                    </button>
                </div>
                <div className="text-9xl absolute right-52">)</div>
            </div>
            <div className="flex justify-center align-center">
                <div className="grid grid-cols-3 justify-center items-center">
                    {recipeComponents ? recipeComponents : <div>loading...</div>}
                </div>
            </div>
        </div>
    );
}
