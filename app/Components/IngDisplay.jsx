export default function IngDisplay({ ingredients }) {
    return (
        <div className="p-10 m-20 h-1/3 bg-black bg-opacity-40 rounded-3xl">
            <h1 className="text-2xl mb-5">Ingredients Required...</h1>
            <div className="flex flex-wrap">
                {ingredients
                    ? ingredients.map((ingredient, index) => {
                        return (
                            <div className="" key={ingredient.name}>
                                <div className="flex justify-left pl-5 align-middle my-2">
                                    <div className="rounded-full bg-orange-300 flex p-1">
                                        <div className="rounded-full h-10 w-10 bg-black p-2">
                                            <img
                                                className="rounded-full h-10 w-10"
                                                src={ingredient.image}
                                                alt={ingredient.name}
                                            />
                                        </div>
                                        <p className="p-1 mr-1">{ingredient.name}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    : ""}
            </div>
        </div>
    );
}
