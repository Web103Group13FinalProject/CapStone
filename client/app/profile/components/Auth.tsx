'use client';
import React, { useState, useEffect } from 'react';
import GetMemberByUsername from '../../../services/GET/GetMemberByUsername';
import CheckPassword from '../../../services/GET/CheckPassword';
import GetAllCategories from '../../../services/GET/GetAllCatgeories';
import Navbar from '../../global/Navbar';
import Login from './Login';
import Profile from './Profile';
import { Member } from '../../../services/types';

export default function Auth() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<Member>({id: 0, name: '', password: 0, username: ''});
    const [categories, setCategories] = useState([]);

    const createToken = (user: Member) => { 
        const token = localStorage.getItem('auth');
        if (token) {
            localStorage.removeItem('auth');
        }
        localStorage.setItem('auth', JSON.stringify(user));
    };

    const checkValidity = async (username: string, password: string) => {
        const member = await GetMemberByUsername(username);
        const categories = await GetAllCategories();
        if (member) {
            const checkedPassword = await CheckPassword(password);
            if (checkedPassword && member.password_id === checkedPassword.id) {
                const memberValues = { id: member.id, name: member.name, password: checkedPassword.password, username: member.username };
                const token = localStorage.getItem('auth');
                if (token) {
                    const existingToken = JSON.parse(token);
                    if (memberValues === existingToken) {
                        setCategories(categories);
                        setLoggedIn(true);
                        return true;
                    } else {
                        createToken(memberValues);
                    }
                }
                setCategories(categories);
                createToken(memberValues);
                setLoggedIn(true);
                return true;
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    };

    useEffect(() => {
        const tokenString = localStorage.getItem('auth');
        if (tokenString) {
            const token = JSON.parse(tokenString);
            setUserInfo(token);
            const executeCheckValidity = async (username: string, password: string) => {
                const res = await checkValidity(username, password);
                if (res === true) {
                    setLoggedIn(true);
                } 
            }
            executeCheckValidity(token.username, token.password);
        }
    }, [loggedIn, setLoggedIn, setUserInfo]);
        
    return (
      <div>
          <Navbar /> 
          {loggedIn ? <Profile user={userInfo} categories={categories} /> : <Login updateLoginState={(username: string, password: string) => checkValidity(username, password)} /> }
      </div>
    )
}