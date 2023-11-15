import React, { useState } from 'react';
import GetMemberByUsername from '../../../services/GET/GetMemberByUsername';
import CheckPassword from '../../../services/GET/CheckPassword';

interface LoginProps {
    updateLoginState: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ updateLoginState }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const handleFormSubmit = async () => {
        const member = await GetMemberByUsername(username);
        if (member) {
            const checkedPassword = await CheckPassword(password);
            if (checkedPassword && member.password_id === checkedPassword.id) {
                updateLoginState(member.username, checkedPassword.password);
            } else {
                setShowWarning(true);
                setTimeout(() => {
                    setShowWarning(false);
                }, 3000);
            }
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        }
    }

    const updateUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e: any) => {
        setPassword(e.target.value);
    }
    
    return ( 
        <div id='Login'>
            <div id="LoginContainer">
                <div id="LoginHeaderContainer">
                    <p id="HeaderLogin">User Login</p>
                </div>
                <div id="LoginInputContainer">
                    <input id="LoginInput" type="text" placeholder="Username" onChange={updateUsername} />
                    <input id="LoginInput" type="password" placeholder="Password" onChange={updatePassword} />
                </div>
                <div id="LoginButtonContainer">
                    <button id="LoginButton" onClick={handleFormSubmit}>Login</button>
                </div>
                <div id="LoginErrorContainer">
                    {showWarning && <p id="LoginError">Incorrect Credentials</p>}
                </div>
            </div>
            <style>
                {`
                    #Login {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 90vh;
                        padding-top: 10vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #LoginContainer {
                        display: flex;
                        position: relative;
                        width: 70%;
                        height: 80%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.7);
                        border-radius: 25px;
                    }
                    #LoginHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-family: InterBold;
                        font-size: 30px;
                    }
                    #LoginInputContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 40%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #LoginInput {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 20%;
                        border: none;
                        outline: none;
                        margin: 5px;
                        padding: 5px;
                        font-family: Inter;
                    }
                    #LoginButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                    }
                    #LoginButton {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 50%;
                        justify-content: center;
                        align-items: center;
                        outline: none;
                        border-radius: 5px;
                        font-family: InterBold;
                        font-size: 20px;
                        cursor: pointer;
                    }
                    #LoginErrorContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        justify-content: center;
                        align-items: center;
                        color: red;
                    }
                `}
            </style>
        </div>
    )
}

export default Login;