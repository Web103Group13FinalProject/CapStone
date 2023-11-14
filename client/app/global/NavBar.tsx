import React from "react";

export default function NavBar() {


    
  return (
    <div id="Navbar">
        <div id="NavbarContainer">
            <div id="NavbarLeftContainer">
                <a href="/" id="HeaderLogo">MealMaster</a>
            </div>
            <div id="NavbarRightContainer">
                <a href="/new">Create Post</a>
                <a href="/profile">Become a Member</a>
            </div>
        </div>
    <style>
        {`
            #Navbar {
                display: flex;
                position: relative;
                width: 100vw;
                height: 12vh;
                justify-content: center;
                align-items: center;
            }
            #NavbarContainer {
                display: flex;
                positon: relative;
                width: 100%;
                height: 100%;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            #NavbarLeftContainer {
                display: flex;
                position: relative;
                width: 50%;
                height: 100%;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
            }
            #HeaderLogo {
                display: flex;
                position: relative;
                align-items: center;
                font-size: 40px;
                font-family: InterBold;
                color: white;
                text-decoration: none;
            }
            #HeaderLogo:hover { opacity: 0.5; }
            #NavbarRightContainer {
                display: flex;
                position: relative;
                width: 40%;
                height: 100%;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }
            #NavbarRightContainer a {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-family: InterBold;
                color: white;
                text-decoration: none;
            }
            #NavbarRightContainer a:hover { opacity: 0.5; }
        `}
    </style>
    </div>


  );
}