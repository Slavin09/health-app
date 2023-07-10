//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract userDB { 

    struct userInfo{
        string username;
        string email;
        string hash_hash;
        string cid;
    }

    mapping (address => userInfo) public wallets;

    function saveUser(address wallet, string memory user, 
    string memory email,
    string memory hashy, 
    string memory ci 
    ) external {
        wallets[wallet].username=user;
        wallets[wallet].email = email;
        wallets[wallet].hash_hash=hashy;
        wallets[wallet].cid=ci;
    } 
    function updateUser(address wallet, uint256 option, string memory data) external {
        if(option == 0){
            wallets[wallet].username=data;
        }
        else if(option == 1){
            wallets[wallet].email=data;
        }
        else if(option == 2){
            wallets[wallet].hash_hash=data;
        }
        else if(option == 3){
            wallets[wallet].cid = data;
        }
    }
    function removeUser(address wallet) external{
        delete wallets[wallet];
    }       
}