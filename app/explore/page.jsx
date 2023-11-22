import RecipeCard from "../Components/RecipeCard";

export default function Explore(){
    const bgStyles = {
        div: {
            position: 'absolute',
            width: '100%',
            overflowX: 'hidden',
        },
        svg: {
            width: '100%',
        }
    }
    return(
        <div>
            <div style={{ ...bgStyles.div, top: '480px', zIndex: -1 }}>
                <svg width="1830" height="1320" viewBox="0 0 1825 1320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M664.636 1318.2C326.125 1295.58 81.1657 1091.52 1 992.327V538.547L1680.51 392L1821.18 1135.66C1838.57 1226.29 1783.74 1328.1 1425.26 1010.32C977.168 613.105 1087.77 1346.48 664.636 1318.2Z" fill="#333333" stroke="#333333" />
                    <path d="M664.636 1.80012C326.125 24.4248 81.1657 228.476 1 327.673V781.453L1680.51 928L1821.18 184.341C1838.57 93.7131 1783.74 -8.0982 1425.26 309.676C977.168 706.895 1087.77 -26.4808 664.636 1.80012Z" fill="#333333" stroke="#333333" />
                </svg>
            </div>
            <div className="relative flex p-20">
                <div className="text-9xl absolute">get(</div>
                <div className="searchBox ml-56 mt-12 w-3/4">
                    <input className="searchInput" type="text" name="" placeholder="Find your next craving..."/>
                    <button className="searchButton flex justify-center" href="#">
                        <svg className=" " xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <g clip-path="url(#clip0_2_17)">
                            <g filter="url(#filter0_d_2_17)">
                                <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                            </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                    <feOffset dy="4"></feOffset>
                                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                                </filter>
                                <clipPath id="clip0_2_17">
                                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className="text-9xl absolute right-52">)</div>
            </div>
            <div>
                {/* Dynamically Loading Recipe Cards */}
            </div>
        </div>
    )
}