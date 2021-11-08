import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Context } from "../store";

function Header(){
    var [state, dispatch] = useContext(Context)
    
    const handleLogout = () => {
        state.auth.token = null; //Ma mäletan et olen lugenud et anda value stateile võrdusmärgiga on halb idee, aga siin ma paremat lahendust ei osanud välja mõelda.
      }

    return(
        <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">
                <Link to="/">Main Page</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/posts">Posts</Link>
            </Menu.Item>
            {state.auth.token && 
                (
                    <>
                        <Menu.Item key="5">
                            <Link to="#" onClick={handleLogout}>Logout</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            Logged in: {state.auth.user.firstName}
                        </Menu.Item>
                    </>
                )
            }
            {!state.auth.token && 
                (
                    <>
                        <Menu.Item key="3">
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/register">Registration</Link>
                        </Menu.Item>
                    </>
                )
            }
            
            
        </Menu>
    );
}

export default Header;