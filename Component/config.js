import {ethers} from "ethers";
import {create as ipfsHttpClient} from "ipfs-http-client";
import userDbAbi from './useDB.json';

export const client = ipfsHttpClient('http://localhost:5173/');
export const userdbaddress='0xd9145CCE52D386f254917e481eB44e9943F39138';
const updater = new ethers.Wallet(updaterwallet, provider);
export const usercontract=new ethers.Contract(userdbaddress, userDbAbi, updater);