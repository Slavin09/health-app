import React from 'react'
import styled from 'styled-components'
import { useState, useRef } from "react";

function Forms() {

    const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

//   const FileView =() =>{
//       return(
//         if (files) return (
//             <div className="container">
//                 <ul>
//                     {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
//                 </ul>
//                 <div className="actions">
//                     <button onClick={() => setFiles(null)}>Cancel</button>
//                     <button onClick={handleUpload}>Upload</button>
//                 </div>
//             </div>
//           )
        
//       )
//     }
  
  return (
    <Container>
        <RefBox>
            <SubBox>
                <Search>
                    <h1>Search Patient</h1>
                    <form action= " "> 
                    <div class="search">
                    <input placeholder="Search address..." type="text"/>
                    <button type="submit">Go</button>
                    </div>
                    </form>
                </Search>
                <Form>
                    <h1>Enter New Records</h1>
                    <form >
                        <div className='form'>
                            <div class="ID">
                                <input placeholder="Name" type="text"/>
                            </div>
                            <div class='CD'>
                                <input placeholder="Wallet Adress" type="text"/>
                            </div>
                            <div class="RD">
                                <input placeholder="Respiratory Disorders" type="text"/>
                            </div>
                            <div class='GD'>
                                <input placeholder="Cardiovascular Disorders" type="text"/>
                            </div>
                            <div class="MD">
                                <input placeholder="Musculoskeletal Disorders" type="text"/>
                            </div>
                            <div class='ND'>
                                <input placeholder="Neurological Disorders" type="text"/>
                            </div>
                        </div>
                        <Drag>
                        <div class="container"> 
                        <div class="header" className="dropzone"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}> 
                            
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Browse File to upload!</p>
                        </div> 
                        <label for="file" class="footer"> 
                            <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path><path d="M18.153 6h-.009v5.342H23.5v-.002z"></path></g></svg> 
                            <p>Not selected file</p> 
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" stroke-width="2"></path> <path d="M19.5 5H4.5" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" stroke-width="2"></path> </g></svg>
                        </label> 
                        <input id="file" type="file" 
                        onChange={(event) => setFiles(event.target.files)}
                        hidden
                        accept="image/png, image/jpeg"
                        ref={inputRef}/> 
                        </div>
                        </Drag>
                        <button type="submit">Submit</button>
                    </form>
                </Form>
            </SubBox>
        </RefBox>
    </Container>
  )
}

export default Forms
const Drag=styled.div`
    display: flex;
    justify-content: center;
    margin-top: -3.4rem;
`

const Container=styled.div`
height: 140vh;
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
margin: 5% auto 7% 33%;

  input[type="text"] {
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
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
   margin-left: 20%;
}
`

const RefBox=styled.div`
width: 100%;
height: 140vh;
display: flex;
justify-content: center;
align-items: center;
`
const SubBox=styled.div`
width: 80rem;
height: 110vh;
margin: auto;
box-shadow: 10px;
background-color: rgb(1, 38, 66, 0.7);
border-radius: 30px;
backdrop-filter: blur(8px);
`