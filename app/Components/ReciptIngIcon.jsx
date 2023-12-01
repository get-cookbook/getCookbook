import React from "react";

function RecipeIngIcon() {
  return (
    <div className="rounded-full h-10 w-10 m-1 bg-yellow-200">
      <img src={IngArray[0].image} alt="Ingredient" className="h-10 w-10" />
    </div>
  );
}

export default RecipeIngIcon;
