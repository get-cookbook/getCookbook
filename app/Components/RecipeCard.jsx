import Image from "next/image";
import RecipeIngIcon from "./ReciptIngIcon";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
    const redirect_url = "/recipe/" + recipe._id;
    return (
        <Link href={redirect_url}>
            {" "}
            <div className="relative flex justify-between align-middle m-5 text-white rounded-2xl bg-red-500 max-w-md ">
                <div className="m-5">
                    <div className="rounded-full overflow-hidden h-24 w-24 bg-white mx-1">
                        <Image src={recipe.image} alt="Food" />
                    </div>
                </div>
                <div className="m-5">
                    <h1 className="text-3xl font-bold">{recipe.title}</h1>
                    <p>{recipe.description}</p>
                </div>
                <div className="absolute flex flex-row-reverse bottom-5 right-5">
                    {recipe.ingredients.map((ingredient) => {
                        <RecipeIngIcon key={ingredient.name} icon={ingredient.image} />;
                    })}
                </div>
            </div>
        </Link>
    );
}
