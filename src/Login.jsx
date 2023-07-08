import React, { useState, useEffect } from 'react';
import Home from "./Home"
import styled from 'styled-components';
import * as fcl from "@onflow/fcl";
import "../flow/config";

function Login() {
  const [user, setUser] = useState({ loggedIn: null });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const AuthedState = () => {
    return (
      <div>
        <UserImg
          src="/public/UserImg.jpg"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          alt='User Image'
        />
        {isDropdownOpen && <DropView />}
      </div>
    );
  };

  const DropView = () => {
    return (
      <DropDown>
        <div>
          Welcome, <br /> 
          {user?.addr ?? "No Address"}
        </div> 
        <hr/>
        <button className="LogOut" onClick={fcl.unauthenticate}>Log Out</button>
      </DropDown>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <button className="connect" onClick={fcl.logIn}>Connect</button>
        {/* <button onClick={fcl.signUp}>Sign Up</button> */}
      </div>
    );
  };

  

  return (
    <div>
      <title>FCL Quickstart with NextJS</title>
      <meta name="description" content="My first web3 app on Flow!" />
      <link rel="icon" href="/favicon.png" />
      {user.loggedIn ? (
        <AuthedState />
      ) : (
        <UnauthenticatedState />
      )}
      {console.log("Log In File: " + user.loggedIn)}
    </div>
  );
}

export default Login;

const UserImg = styled.img`
    height: 48px;
    border-radius: 50px;
    cursor: pointer;
  `;

  const DropDown = styled.div`
    height: 80px;
    width: 180px;
    background-color: #252526;
    border-radius: 20px;
    color: rgb(134, 137, 131);
    padding: 30px;
    

    .LogOut {
      background-color: #252526;
      border: none;
      outline: none;
      color: white;
      width: 100%;
    }
  `;