import Header from "../Components/Header";
import Pfp from "../Components/Pfp";
import RecipeCard from "../Components/RecipeCard";

export default function Profile(){
    return(
        <div>
            <div className=""><Header/></div>
            <div className="">
                <Pfp />
                <div className="relative rounded-3xl bg-yellow-200 bg-board text-orange-700 mx-36 py-40 px-20">
                <div className="absolute flex justify-center right-5 top-5 bg-black rounded-full h-20 w-20">
                    <button title="Add a recipe" class="group cursor-pointer outline-none hover:rotate-90 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px"height="50px"viewBox="0 0 24 24"class="stroke-orange-400 fill-none group-hover:fill-orange-800 group-active:stroke-orange-200 group-active:fill-orange-600 group-active:duration-0 duration-300">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
                            <path d="M8 12H16" stroke-width="1.5"></path>
                            <path d="M12 16V8" stroke-width="1.5"></path>
                        </svg>
                    </button>    
                </div>
                <div className="">
                    <span className="text-4xl font-extrabold">Your Recipes...</span>
                        
                    <div className="grid columns-2">
                        <RecipeCard/>
                        <RecipeCard/>
                        <RecipeCard/>

                    </div>
                    {/* <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/> */}
                </div>
                </div>
            </div>
        </div>
    )
}