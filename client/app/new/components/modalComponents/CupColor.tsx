import React, { useState } from "react";
import { Cup } from "../../../../services/types";
import { ConvertValues } from "../../../utils/ConvertValues";

interface CupColorProps {
    colors: string[];
    prevCup: Cup;
    updateCupColor: (cupColor: string, lidColor: string) => void;
    sendCupColor: (cupColor: number) => void;
    setLidSize: () => void;
}

const CupColor: React.FC<CupColorProps> = ({ colors, prevCup, sendCupColor, setLidSize, updateCupColor }) => {

    const [cupColor, setCupColor] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);


    const changeCupColor = (color: string, id: string) => {
        setCupColor(color);
        setSelectedColorId(id);
        updateCupColor(color, "#000000");
        sendCupColor(ConvertValues(cupColor));
    }


    const checkCupColor = () => {
        if (cupColor === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            setShowWarning(false);
            sendCupColor(ConvertValues(cupColor));
            setLidSize();
        }
    }

    
    return (
        <div id="CupColor">
            <div id="CupColorContainer">
                <div id="CupColorHeaderContainer">
                    <p id="CupColorHeader">Choose Your Cup Color</p>
                </div>
                <div id="RightCupColorContainer">
                    {colors.map((color: any) => (
                        <div id='ColorOption' key={color.id} className={selectedColorId === color.id ? 'selected' : ''} onClick={() => changeCupColor(color.color, color.id)}>
                            <div id="ColorSelectButton" onClick={() => changeCupColor(color.color, color.id)} style={{backgroundColor: color.color}}>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="CupColorButton">
                    <button onClick={checkCupColor}>Next</button>
                </div>
            </div>
            <style>{`
                #CupColor {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50vh;
                    justify-content: center;
                    align-items: center;
                }
                #CupColorContainer {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                }
                #CupColorHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: space-around;
                    align-items: center;
                }
                #CupColorHeader {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                }
                #RightCupColorContainer {
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                }
                #ColorOption {
                    display: flex;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 1px solid white;
                }
                #ColorOption.selected {
                    border: 5px solid red; 
                }
                #ColorSelectButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%; 
                }
                #CupColorButton button{
                    display: flex;
                    position: relative;
                    width: 100px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    transition: 0.5s;
                    border-color: white;
                }
                #CupColorButton button:hover{
                    background-color: black;
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default CupColor;