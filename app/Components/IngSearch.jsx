"use client";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import IngCard from "./IngCard";

export default function IngSearch({ addedIngredients, setAddedIngredients }) {
    const [availableIngredients, setAvailableIngredients] = useState([]);
    const { user, googleSignIn, logOut } = UserAuth();

    const getAvailableIngredients = async () => {
        const search_term = document.getElementById("searchInput").value;
        const response = await fetch("/api/search_ingredients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ searchTerm: search_term }),
        });
        if (response.status == 200) {
            const ingredients = await response.json();
            setAvailableIngredients(ingredients);
        } else {
            console.log("search screwed up");
            console.log(response);
        }
    };

    const addIngredient = (ingredient) => {
        setAddedIngredients([...addedIngredients, ingredient]);
    };

    return (
        <div className="bg-neutral-800 rounded-br-3xl p-5">
            <p className="pl-8 text-gray-500">Add necessary ingredients</p>
            <div className="searchBox">
                <input
                    className="searchInput"
                    id="searchInput"
                    type="text"
                    name=""
                    placeholder="Search Ingredients..."
                    size="30"
                />
                <button
                    className="searchButton flex justify-center"
                    href="#"
                    onClick={getAvailableIngredients}
                >
                    <svg
                        className=" "
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_2_17)">
                            <g filter="url(#filter0_d_2_17)">
                                <path
                                    d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                                    stroke="white"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    shape-rendering="crispEdges"
                                ></path>
                            </g>
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_2_17"
                                x="-0.418549"
                                y="3.70435"
                                width="29.7139"
                                height="29.7139"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                ></feFlood>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                ></feColorMatrix>
                                <feOffset dy="4"></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                ></feColorMatrix>
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_2_17"
                                ></feBlend>
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_2_17"
                                    result="shape"
                                ></feBlend>
                            </filter>
                            <clipPath id="clip0_2_17">
                                <rect
                                    width="28.0702"
                                    height="28.0702"
                                    fill="white"
                                    transform="translate(0.403503 0.526367)"
                                ></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <div className="ingredients-list flex flex-col bg-transparent rounded-lg text-orange-800 {availableIngredients? 'p-2' : ''}">
                {availableIngredients.map((ingredient) => (
                    <div className="">
                        <div
                            className="flex justify-left pl-10 align-middle my-2"
                            key={ingredient.name}
                            onClick={() => addIngredient(ingredient)}
                        >
                            <div className="rounded-full bg-orange-300 flex p-1">
                                <div className="rounded-full h-10 w-10 bg-white  "></div>
                                <p className="p-1 mr-1">{ingredient.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <h1 className="text-4xl pl-5  mb-5">Ingredient List...</h1>
                <br />
                <br />
                <div className="addedItems flex flex-wrap">
                    {addedIngredients.map((ingredient) => (
                        <div
                            key={ingredient.name}
                            className="bg-orange-300 text-orange-800 rounded-full p-1 flex align-middle m-1"
                        >
                            <div className="rounded-full h-10 w-10 bg-white x "></div>
                            <p className="p-1 mr-1">{ingredient.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
