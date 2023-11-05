"use client";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext.js";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    let sign_in_button = document.querySelector("#signIn");
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
    <>
      <div className="flex justify-between p-2 md:p-10 items-center">
        <div>get(cookbook)</div>
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <>
            <div>
              <button
                type="button"
                className="rounded-md bg-gray-800 p-2 hover:bg-gray-600 transition-all"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              id="signIn"
              className="rounded-md bg-gray-800 p-2 hover:bg-gray-600 transition-all"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </>
        )}
      </div>

      <hr className="mb-4" />
    </>
  );
};

export default Navbar;
