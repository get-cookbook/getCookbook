export default function Dummycard({img,color,title,desc}){
    if(color === "red"){
        if (img === "ravioli"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-red-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img === "pancake"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-pancake bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-red-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="biryani"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-biryani bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-red-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="jamun"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-jamun bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-red-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-red-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
    }
    else if(color === "cyan"){
        if (img === "ravioli"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-cyan-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img === "pancake"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-pancake bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-cyan-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="biryani"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-biryani bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-cyan-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="jamun"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-jamun bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-cyan-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-cyan-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
    }
    else if(color === "lime"){
        if (img === "ravioli"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-lime-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img === "pancake"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-pancake bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-lime-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="biryani"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-biryani bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-lime-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="jamun"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-jamun bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-lime-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-lime-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
    }
    else if (color === "yello"){
        if (img === "ravioli"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-yellow-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img === "pancake"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-pancake bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-yellow-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="biryani"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-biryani bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-yellow-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else if(img==="jamun"){
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-jamun bg-no-repeat bg-blend-darken bg-cover backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-yellow-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                    <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-yellow-700 to-transparent rounded-3xl truncate">
                        <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                        <p className="m-2 text-white font-light text-xl">{desc}</p>
                    </div>
                </div>
            )
        }
    }
    else{
        return(
            <div className="h-40 m-1 w-80 rounded-3xl bg-ravioli bg-no-repeat bg-blend-darken bg-right backdrop-blur-3xl truncate origin-right scale-125">
                <div className="pl-10 pt-5 pb-1 h-44 w-80 bg-gradient-to-r from-red-700 to-transparent rounded-3xl truncate">
                    <h3 className="m-2 text-white font-extrabold text tracking-widest text-3xl">{title}</h3>
                    <p className="m-2 text-white font-light text-xl">{desc}</p>
                </div>
            </div>
        )
    }
}