import Image from "next/image";
import RecipeIngIcon from "./ReciptIngIcon";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
    const redirect_url = "/recipe/" + recipe._id;
    return (
        <Link href={redirect_url}>
            <div className="relative flex justify-between align-middle m-5 text-white rounded-2xl bg-red-500 max-w-md ">
                <div className="m-5">
                    <div className="rounded-full overflow-hidden h-24 w-24 bg-white mx-1">
                        <img src="/logo.svg" alt="Food" className="h-full w-full" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="m-5">
                        <h1 className="text-3xl font-bold">{recipe.title}</h1>
                        <p>{recipe.description}</p>
                    </div>
                    <div className="flex flex-row-reverse pr-5">
                        {recipe.ingredients.map((ingredient) => {
                            return (
                                <div className="" key={ingredient.name}>
                                    <div className="flex justify-left pl-5 align-middle my-2">
                                        <div className="rounded-full bg-orange-300 flex p-1">
                                            <div className="rounded-full h-10 w-10 bg-black p-2">
                                                <img
                                                    src={ingredient.image}
                                                    alt={ingredient.name}
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <p className="p-1 mr-1">{ingredient.name}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
}
