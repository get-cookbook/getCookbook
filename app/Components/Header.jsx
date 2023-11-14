"use client";
import NameNLogo from "./NameNLogo";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

function NavButton({ text, goto, id }) {
    return (
        <button
            className="relative mx-5 my-10 px-8 py-2 rounded-md bg-black text-white isolation-auto z-10 border-2 border-orange-500 hover:border-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-gradient-to-tl from-red-600 to-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
            onClick={goto}
            id={id}
        >
            {text}
        </button>
    );
}

export default function Header() {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        let sign_in_button = document.querySelector("#login");
        let spinner =
            "<Image src = 'https://cdn.dribbble.com/users/29051/screenshots/2347771/media/14b61b943da9eeac8d91c4efe0d2a3a0.gif' width = '50px'/>";
        sign_in_button.innerHTML = spinner;
        try {
            await googleSignIn();
        } catch (error) {
            alert("check your internet connection");
            sign_in_button.innerHTML = "Sign In";
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            alert("check your internet connection");
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
            console.log(user);
        };
        checkAuthentication();
    }, [user]);

    return (
        <div className="relative flex align-middle justify-between bg-black p-1">
            <NameNLogo />
            <div className="flex align-middle justify-center p-5">
                <NavButton text="ABOUT" />
                <NavButton text="EXPLORE" />

                {loading ? (
                    <div
                        className="relative mx-5 my-10 px-8 py-2 rounded-md bg-black text-white isolation-auto z-10 border-2 border-orange-500 hover:border-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-gradient-to-tl from-red-600 to-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                    >
                        LOADING...
                    </div>
                ) : user ? (
                    <NavButton text="LOGOUT" goto={handleSignOut} />
                ) : (
                    <NavButton text="LOGIN" goto={handleSignIn} id="login" />
                )}
            </div>
        </div>
    );
}
