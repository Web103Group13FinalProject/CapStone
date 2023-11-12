import React from "react";

export default function NavBar() {
  return (
    <div id="Navbar">
        <div id="NavbarContainer">
            <div id="NavbarLeft">
                <a href="/" id="Logo">MealMaster</a>
            </div>
            <div id="NavbarRight">
                <a href="/member"><button>All Members</button></a>
                <a href="/new"><button>Create Post</button></a>
            </div>
        </div>
    <style>
        {`
        #Navbar {
            display: flex;
            position: relative;
            width: 100%;
            height: 80px;
        }
        #NavbarContainer {
            display: flex;
            positon:relative;
            flex-direction: row;
            width: 100%;
            height: 100%;
            justify-content: space-between;
            align-items: center;
        }
        #NavbarLeft {
            display: flex;
            position: relative;
            flex-direction: row;
            width: 60%;
            height: 100%;
            justify-content: flex-start;
            align-items: center;
            padding-left: 15px;
        }
        #Logo {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            font-size: 50px;
            font-weight: bold;
            color: white;
            text-decoration: none;
            align-items: center;
        }
        #NavbarRight {
            display: flex;
            position: relative;
            flex-direction: row;
            width: 40%;
            height: 100%;
            justify-content: space-around;
            align-items: center;
        }
        #NavbarRight button {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background-color: #000000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            align-items: center;
        }
        
        `}
    </style>
    </div>


  );
}