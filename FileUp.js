import { Web3Storage } from 'web3.storage'
import UserData from './src/UserData'

function getFiles () {
    const fileInput = document.querySelector('input[type="file"]')
    return fileInput.files
  }