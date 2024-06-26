import Dummycard from "./Components/Dummycard";
import Header from "./Components/Header";
import Bg from "./Components/Bg";
import Wuzdiz from "./Components/wuzzdizz";
import ExploreBtn from "./Components/ExploreBtn";
import EditorPage from "./make_a_recipe/page";
export default function Home() {
  return (
    <div className="Home min-h-screen">
      <Header />
      <Bg />
      <div className="flex align-middle justify-center h-64">
        <h1 className="text-white text-6xl pt-28 font-thin justify-center">
          Experience the beauty of cooking
        </h1>
      </div>
      <div className="relative flex w-screen h-64  justify-center">
        <div className="relative mt-20 w-3/4">
          <div className="absolute left-0; h-44 ">
            <Dummycard
              color="lime"
              title="Ravioli Pasta"
              desc="It's amazingly mouth watering"
            />
          </div>
          <div className="absolute left-1/4 top-28 p-0 h-40 w-1/5">
            <Dummycard
              img="pancake"
              color={"red"}
              title="Pancakes"
              desc="Cakes don't need to be thicc"
            />
          </div>
          <div className="absolute right-0 p-0 h-44 w-80">
            <Dummycard
              img="jamun"
              color="cyan"
              title="Gulab Jamun"
              desc="Balls in syrup"
            />
          </div>
          <div className="absolute top-28 right-1/4 p-0 h-44 w-80">
            <Dummycard
              img="biryani"
              color="yello"
              title="Biryani"
              desc="U not indian if u not biryani"
            />
          </div>
        </div>
      </div>
      <Wuzdiz />
      <ExploreBtn /> 
    </div>
  );
}
