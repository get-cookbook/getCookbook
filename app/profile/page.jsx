"use client";
import { useRouter } from "next/navigation";
import Header from "../Components/Header";
import Pfp from "../Components/Pfp";
import RecipeCard from "../Components/RecipeCard";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Profile() {
    const { user, googleSignIn, logOut } = UserAuth();
    let router = useRouter();

    if (!user) {
        router.replace("/");
    }

    const [recipeComponents, setRecipeComponents] = useState([]);

    async function fetchData() {
        const response = await fetch(
            `/api/get_recipes_per_user?user_id${user.uid}`,
            {
                method: "get",
            },
        );

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

    fetchData().catch((error) => {
        console.error("Error:", error);
    });

    return (
        <div>
            <div className="">
                <Header />
            </div>
            <div className="">
                <Pfp image={user ? user.photoURL : "/user.png"} />
                <div className="relative rounded-3xl bg-yellow-200 bg-board text-orange-700 mx-36 py-40 px-20">
                    <div className="absolute flex justify-center right-5 top-5 bg-black rounded-full h-20 w-20">
                        <button
                            title="Add a recipe"
                            class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                            onClick={() => {
                                router.push("/make_a_recipe");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50px"
                                height="50px"
                                viewBox="0 0 24 24"
                                class="stroke-orange-400 fill-none group-hover:fill-orange-800 group-active:stroke-orange-200 group-active:fill-orange-600 group-active:duration-0 duration-300"
                            >
                                <path
                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                    stroke-width="1.5"
                                ></path>
                                <path d="M8 12H16" stroke-width="1.5"></path>
                                <path d="M12 16V8" stroke-width="1.5"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <span className="text-4xl font-extrabold">Your Recipes...</span>

                        <div className="grid grid-cols-2">{recipeComponents}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
