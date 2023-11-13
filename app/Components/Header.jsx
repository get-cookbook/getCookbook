import NameNLogo from "./NameNLogo"

function NavButton({text,goto}){
    return(
        <button className="relative mx-5 my-10 px-8 py-2 rounded-md bg-black text-white isolation-auto z-10 border-2 border-orange-500 hover:border-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-gradient-to-tl from-red-600 to-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">{text}</button>
    )
}




export default function Header(){
    return (
        <div className="relative flex align-middle justify-between bg-black p-1">
            <NameNLogo/>
            <div className="flex align-middle justify-center p-5">
                <NavButton text="ABOUT"/>
                <NavButton text="EXPLORE"/>
                <NavButton text="LOGIN"/>
            </div>
        </div>
    )
}