import React from 'react'
import styled from 'styled-components'
import { useState, useRef } from "react";
import {useDropzone} from 'react-dropzone'
import { Web3Storage, getFilesFromPath, File } from 'web3.storage';
import { TransactionContext } from "./transactioncontext";


function UserData() {



  async function createProfile(){
    let getName=document.getElementById("Name").value.toString()
    let getAddress=document.getElementById("Address").value.toString();
    console.log(getName);
    console.log(getAddress);
  }

    const client = new Web3Storage({ token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE0NGUwZjM1NjE5MmNGMjkzY0Y2RjM5ODI5MTNFYjVFQzE4OGE3NTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODg4ODY5NjI4MjYsIm5hbWUiOiJFbmlnbWFATWVkaWNvcmRzIn0.zZXBJmtzm3F96eEimIoTIVg78QaR4ixqjJxbfqaOurU'});
    const [files, setFiles] = useState([]);
  
    const onDrop = async (acceptedFiles) => {
      setFiles(acceptedFiles);
      const cid = await client.put(acceptedFiles, { wrapWithDirectory: true });
      console.log('Content ID (CID):', cid);
    };
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
    const images = files.map((file) => (
      <img className='Uploaded-Img' key={file.name} src={URL.createObjectURL(file)} alt='image' />
    ));

  
  return (
    <Container>
        <RefBox>
            <SubBox>
                <Search>
                    <h1>Search Patient</h1>
                    <form action= " "> 
                    <div class="search">
                        <input placeholder="Enter Name..." type="text" className='form-control' id="Name"/>
                        <input placeholder="Enter Address..." type="text" className='form-control' id="Address"/>
                    </div>
                    <button onClick={createProfile} type="submit">Search</button>
                    </form>
                </Search>
                <Form>
                    <h1>Upload Data</h1>
                    <form >
                    <div className='form'>
                            <div class="ID">
                                <input placeholder="Name" type="text"/>
                            </div>
                            <div class='CD'>
                                <input placeholder="Wallet Adress" type="text"/>
                            </div>
                            <div class="RD">
                                <input placeholder="Enter Symptoms: headache, chills...." type="text"/>
                            </div>
                            </div>
                        <Drag>
                        <div class="container" {...getRootProps()}> 
                        <div class="header" className='dropzone'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Drop files to Upload!</p>
                        </div> 
                        <input id="file" type="file" {...getRootProps()}/>
                        <div className='UPImg'>{images}</div>
                        </div>
                        
                        </Drag>
                        <button type="submit">Show Text</button>
                    </form>
                </Form>
            </SubBox>
        </RefBox>
    </Container>
  )
}

export default UserData

const Drag=styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.4rem;
    .UPImg{
        height: 3rem;
    }
`

const Container=styled.div`
height: 150vh;
width: 100%;
background-image: linear-gradient(40deg, rgb(0, 3, 6), rgb(1, 42, 73));
display: flex;
overflow-x: hidden;
`
const Form=styled.div`
text-align: center;
h1{
    color: rgb(125, 215, 255);
}    
.form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 5%;
}
.RD{

}
input[type="text"] {
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin:0% auto 7% auto;
  }

  button[type="submit"] {
    margin-top: 3rem;
 --hover-shadows: 16px 16px 33px #121212,
                   -16px -16px 33px #013358;
 --accent: fuchsia;
 font-weight: bold;
 letter-spacing: 0.1em;
 border: none;
 border-radius: 1.1em;
 background-color: #012038;
 color: white;
 padding: 1em 2em;
 transition: box-shadow ease-in-out 0.3s,
             background-color ease-in-out 0.1s,
             letter-spacing ease-in-out 0.1s,
             transform ease-in-out 0.1s;
 box-shadow: 13px 13px 10px #00182B,
             -13px -13px 10px #01233f;
}

button[type="submit"]:hover {
 box-shadow: var(--hover-shadows);
}

button[type="submit"]:active {
 box-shadow: var(--hover-shadows),
              var(--accent) 0px 0px 30px 5px;
 background-color: var(--accent);
 transform: scale(0.95);
}

`
const Search=styled.div`
display: inline-block;
position: relative;
text-align: center;
margin: 5% auto 5% ;

  input[type="text"] {
  width: 400px;
  padding: 10px;
  margin-left: 1rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
  }
  .search{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 12.2rem;
    margin-top: 3rem;
  }

  button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 2rem auto auto 13rem; 
  
  top: 0;
  right: 0;
  left: -55px;
  transition: 150ms ease;
}

  button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: rgb(17, 135, 253);
}
h1{
   color: rgb(125, 215, 255);
   margin-left: 14rem;
}
`

const RefBox=styled.div`
width: 100%;
height: 150vh;
display: flex;
justify-content: center;
align-items: center;
`
const SubBox=styled.div`
width: 80rem;
height: 120vh;
margin: auto;
box-shadow: 10px;
background-color: rgb(1, 38, 66, 0.7);
border-radius: 30px;
backdrop-filter: blur(8px);
`